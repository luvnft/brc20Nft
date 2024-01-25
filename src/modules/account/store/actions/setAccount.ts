import { createAction as createSmartAction } from 'redux-smart-actions';
import { connectWallet } from 'modules/account/api/connectWallet';
// import { getAuthToken } from '../../api/getAuthToken';

// TODO 对比原来修改
// import { postProfile } from 'modules/Profile/actions/profile';
// import {FetchProfile} from 'modules/Personal/action/userInfoAction';
import { DispatchRequest, RequestAction } from '@redux-requests/core';
import Web3 from 'web3';
import { BlockchainNetworkId } from 'modules/common/conts';
import BigNumber from 'bignumber.js';
import { Store } from 'redux';
import { RootState } from 'store';
import {
  setChainId,
  // setJWTToken,
  setTimestamp,
} from 'modules/common/utils/localStorage';
import { BigNumber as BigNumbers } from 'ethers';
import { login } from 'modules/common/actions/auth';
import { jwtTokenStore } from 'modules/common/store/token';

// import {
//   setSessionStorageJWTToken,
//   getSessionStorageJWTToken,
// } from '../../../common/utils/sessionStorage';
import {getJWTToken,setJWTToken} from 'modules/common/utils/localStorage';

// TODO pass unit (now BNB hardcoded)
export interface ISetAccountData {
  token: string;
  address?: string;
  provider?: any;
  chainId?: BlockchainNetworkId;
  web3?: Web3;
  balance?: BigNumber;
  timestamp?: string;
}

export const getSalt = (timestamp: number) => {
  return BigNumbers.from(
    BigNumbers.from(timestamp).toHexString() +
    'xxxxxxxxxxxxxxxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }),
  );
};

export const setAccount = createSmartAction(
  'AccountActions/setAccount',
  (data?: ISetAccountData) => ({
    request: {
      promise: (async function() {
      })(),
    },
    meta: {
      asQuery: true,
      onRequest: (
        request: { promise: Promise<any> },
        action: RequestAction,
        store: Store<RootState> & { dispatchRequest: DispatchRequest },
      ) => {
        return {
          promise: (async () => {
            if (data) {
              return data;
            }
            const [web3, provider] = await connectWallet();
            const address = (await web3.eth.getAccounts())[0];


            const timestamp = parseInt(new Date().getTime().toString().slice(0, 10));
            const SIGN_STR = `Hi! Welcome to Dexx. Please sign the message to let us know that you own the wallet. Signing is gas-less and will not give Dexx permission to conduct any transactions with your wallet. Timestamp is ${timestamp}.`;
            const signature = await web3.eth.personal.sign(
              SIGN_STR,
              address,
              '',
            );
            let code = store.getState().router.location.query.invite_code;
            const { data: authData } = await store.dispatchRequest(login({
              wallet_address: address,
              invite_code: code ? code : null,
              timestamp: timestamp,
              signature: signature,
            }));

            const chainId = await web3.eth.getChainId();
            let token = getJWTToken() || '';
            if (authData.code === 0) {
              token = `${authData.data.access_token}`;
              setJWTToken(token);
              store.dispatch(jwtTokenStore.actions.setJwtToken(token));
            }

            // await store.dispatchRequest(
            //   FetchProfile({
            //     account:address,
            //     chain:chainId,
            //     network:process.env.REACT_APP_NETWORK
            //   }),
            // );

            // console.log(JSON.stringify(authResponse))
            // const token = authResponse.data.data.accessToken;
            // const orgID = authResponse.data.data.orgIDs[0].toString();
            // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50QWRkcmVzcyI6IjB4NkRlRjg0QWI5MUNjZWQwMThGQTZDRUQ2ZGQzZTA0ZmZhQUFkZjU5OSIsImV4cCI6MTY1NzUzMzAxOSwiaXNzIjoibmZ0c3RvcmUiLCJuYmYiOjE2NTc1MjAwMTl9.dR8ccLz9XXYVuaRB3MV2jxWty_2_kgyQt7DWfq7yF4Q"


            let balance: string;
            try {
              // TODO Rpc may be slow
              balance = await web3.eth.getBalance(address);
            } catch (error) {
              balance = '0';
            }
            // setJWTToken(token);
            setChainId(chainId);
            setTimestamp(timestamp + '');
            return {
              timestamp,
              token,
              address,
              provider,
              chainId,
              web3,
              // orgID,
              balance: new BigNumber(web3.utils.fromWei(balance)),
            };
          })(),
        };
      },
      // TODO custom notification. Filter close modal error
      suppressErrorNotification: true,
      getData: (data: ISetAccountData) => data,
      onSuccess: (
        response: { data: ISetAccountData },
        action: RequestAction,
      ) => {
        // console.log("------provider-------")
        const provider = response.data.provider;
        // console.log('provider', provider);
        delete response.data.provider;
        if (action.meta) {
          action.meta.provider = provider;
        }
        return response;
      },
    },
  }),
);
