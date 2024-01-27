import React, { createContext, useCallback, useContext, useMemo, useReducer } from 'react';
import { BtcConnectorName, Network } from './types';
import { Connector, ConnectorOptions } from './connectors/types';
import { UnisatConnector } from './connectors/Unisat';
import { OkxConnector } from './connectors/Okx';
import { createSlice } from '@reduxjs/toolkit';
import {getLocalStorageCtx} from '../../common/utils/localStorage';
// import {store} from '../../../store';
import {setLocalStorageCtx} from '../../common/utils/localStorage';

type Action =
  | { type: 'on connect'; connectorName: BtcConnectorName }
  | { type: 'connect failed' }
  | { type: 'connected'; connectorName: BtcConnectorName; address: string; publicKey: string; network: Network }
  | { type: 'account changed'; address: string; publicKey: string }
  | { type: 'network changed'; network: Network }
  | { type: 'disconnected' }

type Dispatch = (action: Action) => void

interface State {
  isConnecting: boolean
  isConnected: boolean
  address?: string | undefined
  publicKey?: string | undefined
  connectorName?: BtcConnectorName | undefined | string
  network?: Network | undefined
}

const initialState: State = {
  isConnecting: false,
  isConnected: false,
  connectorName: undefined,
  address: undefined,
  publicKey: undefined,
  network: undefined,
};

export const btcContext = createSlice({
  name: 'context',
  initialState,
  reducers: {
    onConnect: (state, action) => {
      state.isConnecting = true;
      state.connectorName = action.payload.connectorName;
    },
    connectFailed: (state, action) => {
      state.isConnecting = false;
      state.connectorName = undefined;
    },
    connected: (state, action) => {
      state.isConnecting = false;
      state.isConnected = true;
      state.connectorName = action.payload.connectorName;
      state.address = action.payload.address;
      state.publicKey = action.payload.publicKey;
      state.network = action.payload.network;
    },
    disconnected: (state, action) => {
      state.isConnecting = false;
      state.isConnected = false;
      state.connectorName = undefined;
      state.address = undefined;
      state.publicKey = undefined;
      state.network = undefined;
    },
    accountChanged: (state, action) => {
      // console.log('accountChanged', action);
      state.address = action.payload.address;
      state.publicKey = action.payload.publicKey;
    },
    networkChanged: (state, action) => {
      state.network = action.payload.network;
    },
  },
});

type BtcProviderProps = { children: React.ReactNode }

export const BtcContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined);

const btcReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'on connect': {
      // console.log('on connect');
      const info = {
        ...state,
        isConnecting: true,
        connectorName: action.connectorName,
      };
      // sessionStorage.setItem('ctx', JSON.stringify(info));
      setLocalStorageCtx(JSON.stringify(info))
      return info;
    }

    case 'connect failed': {
      // console.log('connect failed');
      const info = {
        ...state,
        isConnecting: false,
        connectorName: undefined,
      };
      // sessionStorage.setItem('ctx', JSON.stringify(info));
      setLocalStorageCtx(JSON.stringify(info))
      return info;
    }

    case 'connected': {
      // console.log('case-connected 链接成功保存数据');
      const info = {
        isConnecting: false,
        isConnected: true,
        connectorName: action.connectorName,
        address: action.address,
        publicKey: action.publicKey,
        network: action.network,
      };
      // sessionStorage.setItem('ctx', JSON.stringify(info));
      setLocalStorageCtx(JSON.stringify(info))
      return info;
    }

    case 'disconnected': {
      // console.log('disconnected');
      const info = {
        isConnecting: false,
        isConnected: false,
        connectorName: undefined,
        address: undefined,
        publicKey: undefined,
        network: undefined,
      };
      // sessionStorage.setItem('ctx', JSON.stringify(info));
      setLocalStorageCtx(JSON.stringify(info))
      return info;
    }

    case 'account changed': {
      // console.log('account changed-state:', state);
      // console.log('account changed-action:', action);
      const info = { ...state, address: action.address, publicKey: action.publicKey };
      // sessionStorage.setItem('ctx', JSON.stringify(info));
      setLocalStorageCtx(JSON.stringify(info))
      return info;
    }

    case 'network changed': {
      // console.log('network changed');
      const info = { ...state, network: action.network };
      // sessionStorage.setItem('ctx', JSON.stringify(info));
      setLocalStorageCtx(JSON.stringify(info))
      return info;
    }

    default: {
      // sessionStorage.setItem('ctx', JSON.stringify(''));
      setLocalStorageCtx(JSON.stringify(''))
      throw new Error(`Unhandled action type`);
    }
  }
};

export const BtcProvider = ({ children }: BtcProviderProps) => {
  const walletData = getLocalStorageCtx();
  const [state, dispatch] = useReducer(btcReducer, {
    isConnecting: walletData ? walletData.isConnecting : false,
    isConnected: walletData ? walletData.isConnected : false,
    connectorName: walletData ? walletData.connectorName : undefined,
    address: walletData ? walletData.address : undefined,
    publicKey: walletData ? walletData.publicKey : undefined,
    network: walletData ? walletData.network : undefined,
  });
  return <BtcContext.Provider value={{ state, dispatch }}>{children}</BtcContext.Provider>;
};

export const useBtcContext = () => {
  const ctx = useContext(BtcContext);
  if (ctx === undefined) {
    throw new Error('useBtc must be used within a BtcProvider');
  }
  return ctx;
};

export const useBtc = () => {
  const ctx = useBtcContext();

  const defaultConnectorOptions: ConnectorOptions = useMemo(
    () => ({
      onAccountsChanged: (address, publicKey) => {

        // console.log('onAccountsChanged-Change', address, publicKey);
        ctx.dispatch({
          type: 'account changed',
          address,
          publicKey,
        });
        // store.dispatch(btcContext.actions.accountChanged({ address, publicKey }));
      },
      onNetworkChanged: (network) => {
        ctx.dispatch({
          type: 'network changed',
          network,
        });
        // store.dispatch(btcContext.actions.networkChanged({ network }));
      },
      onDisconnect: () => {
        ctx.dispatch({ type: 'disconnected' });
        // store.dispatch(btcContext.actions.disconnected);
      },
    }),
    [ctx],
  );

  const ConnectorMap: Record<BtcConnectorName, Connector> = useMemo(
    () => ({
      Unisat: new UnisatConnector(defaultConnectorOptions),
      OKX: new OkxConnector(defaultConnectorOptions),
      Xverse: new OkxConnector(defaultConnectorOptions),
    }),
    [defaultConnectorOptions],
  );

  const connector = useMemo(() => {
    // console.log('connector---->', ctx.state);
    // @ts-ignore
    return ConnectorMap[ctx.state.connectorName];
  }, [ConnectorMap, ctx.state]);

  const disconnect = useCallback(() => {
    ctx.dispatch({ type: 'disconnected' });
    // store.dispatch(btcContext.actions.disconnected);
    connector.disconnect();
  }, [connector, ctx]);

  const connect = useCallback(async (connectorName: BtcConnectorName) => {
      // console.log('1');
      try {
        // console.log('connect', ctx);
        if (ctx.state.isConnected) {
          disconnect();
        }
        // TODO: avoid dispatch if is connected
        ctx.dispatch({
          type: 'on connect',
          connectorName,
        });
        // store.dispatch(btcContext.actions.onConnect({ connectorName }));

        const { address, publicKey, network } = await ConnectorMap[connectorName].connect();

        await ctx.dispatch({
          type: 'connected',
          connectorName,
          address,
          publicKey,
          network,
        });
        // store.dispatch(btcContext.actions.connected({ connectorName, address, publicKey, network }));
        return Promise.resolve(
          {
            address,
            publicKey,
            network,
            connectorName,
            isConnecting: false,
            isConnected: true,
          },
        );
      } catch (error) {
        ctx.dispatch({ type: 'connect failed' });
        // dispatch(btcContext.actions.connectFailed)
        throw error;
      }
    },
    [ConnectorMap, ctx, disconnect],
  );
  const signMessage = useCallback(
    async (message?: string, connectorName?: string) => {
      let methods = connector ? connector : ConnectorMap[connectorName as BtcConnectorName];
      return methods.signMessage(message);
    },
    [ConnectorMap, connector],
  );


  return { ...ctx.state, connect, disconnect, connector, signMessage, ctx };
};

