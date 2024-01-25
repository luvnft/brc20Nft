import { getQuery, resetRequests } from '@redux-requests/core';
import { END, eventChannel } from 'redux-saga';
import { put, putResolve, select, take, takeEvery } from 'redux-saga/effects';
import { RootState } from 'store';
import { Address } from '../../common/types/unit';
import { connect, connectIsFinished } from '../store/actions/connect';
import { disconnect } from '../store/actions/disconnect';
import { ISetAccountData, setAccount } from '../store/actions/setAccount';
import { updateAccount } from '../store/actions/updateAccount';
import { clearLocalStorage } from '../../common/utils/localStorage';

enum WalletEventType {
  'AccountChanged' = 'AccountChanged',
  'Disconnect' = 'Disconnect',
  'Message' = 'Message',
  'ChainChanged' = 'ChainChanged',
}

export interface ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}

export interface IAccountChangedEvent {
  type: WalletEventType.AccountChanged;
  data: {
    accounts: Address[];
  };
}

export interface IDisconnectEvent {
  type: WalletEventType.Disconnect;
  error: ProviderRpcError;
}

export interface IMessageEvent {
  type: WalletEventType.Message;
  data: any;
}

export interface IChainChangedEvent {
  type: WalletEventType.ChainChanged;
  data: { chainId: string };
}

export type ProviderEvent =
  | IAccountChangedEvent
  | IDisconnectEvent
  | IMessageEvent
  | IChainChangedEvent;

function createEventChannel(provider: any) {
  return eventChannel(emitter => {
    provider
      .on('accountsChanged', (accounts: Address[]) => {
        emitter({
          data: { accounts },
          type: WalletEventType.AccountChanged,
        } as IAccountChangedEvent);
      })
      .on('disconnect', (error: Error) => {
        emitter({
          error,
          type: WalletEventType.Disconnect,
        } as IDisconnectEvent);
        emitter(END);
      })
      .on('message', (message: any) => {
        emitter({ message, type: WalletEventType.Message });
      })
      .on('chainChanged', (chainId: string) => {
        emitter({
          data: { chainId },
          type: WalletEventType.ChainChanged,
        } as IChainChangedEvent);
      });

    return () => {
      if (provider.disconnect instanceof Function) {
        provider.disconnect();
      }
    };
  });
}

export function* onConnectWallet(data?: {
  payload?: { provider: any; address: string };
}) {
  let provider;
  if (!data?.payload) {
    const settimeoutId = setTimeout(() => {
      // localStorage.clear()
      clearLocalStorage();
      window.sessionStorage.clear();
      window.location.reload()
    }, 60e3)
    const { action, error } = yield putResolve(setAccount());
    clearTimeout(settimeoutId)
    if (error || action.type === setAccount.toString() + '_ERROR') {
      return;
    }
    provider = action.meta.provider;
  } else {
    provider = data.payload.provider;
  }

  yield put(connectIsFinished());

  const channel = createEventChannel(provider);
  while (true) {
    const event: ProviderEvent = yield take(channel);

    if (event.type === WalletEventType.ChainChanged) {
      if (event.data.chainId) {
        yield putResolve(
          updateAccount({ chainId: parseInt(event.data.chainId, 16) }),
        );
      }
    } else if (event.type === WalletEventType.AccountChanged) {
      const address =
        event.data.accounts.length > 0 ? event.data.accounts[0] : undefined;

      const { currentAddress }: { currentAddress?: string } = yield select(
        (state: RootState) => {
          const { data } = getQuery<ISetAccountData | null>(state, {
            type: setAccount.toString(),
            action: setAccount,
          });

          return { currentAddress: data?.address };
        },
      );

      if (currentAddress?.toLowerCase() !== address?.toLowerCase()) {
        // window.localStorage.clear();
        clearLocalStorage();
        window.sessionStorage.clear();
        window.location.reload();
      }
    }
  }
}

function* onDisconnectWallet() {
  // localStorage.clear();
  clearLocalStorage();
  sessionStorage.clear();
  const requestsToReset: string[] = [
    setAccount.toString(),
  ];


  yield put(resetRequests(requestsToReset));
}

export function* connectSaga() {
  yield takeEvery(connect.toString(), onConnectWallet);
  yield takeEvery(disconnect.toString(), onDisconnectWallet);
}
