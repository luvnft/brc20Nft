import { createDriver as createAxiosDriver } from '@redux-requests/axios';
import {
  // abortRequests,
  Driver,
  getQuery,
  handleRequests,
} from '@redux-requests/core';
import { createDriver } from '@redux-requests/promise';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import axios from 'axios';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { i18nSlice } from 'modules/i18n/i18nSlice';
import { LAYOUT_STATE_NAME, layoutReducer } from 'modules/layout/store/layout';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { setAccount } from '../modules/account/store/actions/setAccount';
import { extractMessage } from '../modules/common/utils/extractError';
import { historyInstance } from '../modules/common/utils/historyInstance';
import { NotificationActions } from 'modules/notification/store/NotificationActions';
import { notificationSlice } from '../modules/notification/store/notificationSlice';
import { rootSaga } from './rootSaga';
import { i18nPersistConfig } from './webStorageConfigs';
import {
  // BlockchainNetworkId,
  DefaultTokenSymbol,
  ZERO_ADDRESS,
} from '../modules/common/conts';
import { Address } from '../modules/common/types/unit';
import { TokenSymbol } from '../modules/common/types/TokenSymbol';
// import { disconnect } from 'modules/account/store/actions/disconnect';

import { likeSlice } from 'modules/common/store/like';
import { userSlice } from 'modules/common/store/user';
import { btcContext } from 'modules/web3/wallet';
import { homeStore } from 'modules/Home/store/homeStore';
import { jwtTokenStore } from '../modules/common/store/token';
// import { getChainId } from 'modules/common/utils/localStorage';
// import { getNotWeb3WalletInfo } from 'modules/account/hooks/useWeb3React';
// import { getTimestamp } from 'modules/common/utils/localStorage';
// import {
//   getJWTToken,
// } from 'modules/common/utils/localStorage';

// import {getSessionStorageJWTToken} from '../modules/common/utils/sessionStorage';
// import { clearLocalStorage } from 'modules/common/utils/localStorage';
import { getJWTToken } from 'modules/common/utils/localStorage';
import {getLocalStorageCtx} from 'modules/common/utils/localStorage';

type MainApiDriverName =
  | 'mainApiEthMainnet'
  | 'mainApiEthRinkeby'
  | 'mainApiSmartchain'
  | 'mainApiSmartTestChain'
  | 'mainApiHeco'
  | 'mainApiMatic'
  | 'mainApiAirdrop'
  | 'mainApiAnkr'
  | 'mainApiBas'
  | 'mainApiEdge'
  | 'mainApiBasMainnet';
// const chainToMainApiDriver: {
//   [key in BlockchainNetworkId]: MainApiDriverName | undefined;
// } = {
//   [BlockchainNetworkId.mainnet]: 'mainApiEthMainnet',
//   [BlockchainNetworkId.ropsten]: undefined,
//   [BlockchainNetworkId.goerli]: undefined,
//   [BlockchainNetworkId.smartchain]: 'mainApiSmartchain',
//   [BlockchainNetworkId.ankrTest]: 'mainApiAnkr',
// };
// function getMainApiDriverName(chainId: BlockchainNetworkId): MainApiDriverName {
//   return chainToMainApiDriver[chainId] || 'mainApiEthMainnet';
// }
//
// function getAirdropMainApiDriverName(): MainApiDriverName {
//   return 'mainApiAirdrop';
// }
type NftViewApiDriverName =
  | 'nftViewApiEthMainnet'
  | 'nftViewApiEthRinkeby'
  | 'nftViewApiSmartchain'
  | 'nftViewApiSmartchainTest'
  | 'nftViewApiHeco'
  | 'nftViewApiMatic'
  | 'mainApiAnkr'
  | 'mainApiBas'
  | 'mainApiEdge'
  | 'mainApiBasMainnet';

// const chainNftViewApiDriver: {
//   [key in BlockchainNetworkId]: NftViewApiDriverName | undefined;
// } = {
//   [BlockchainNetworkId.mainnet]: 'nftViewApiEthMainnet',
//   [BlockchainNetworkId.ropsten]: undefined,
//   [BlockchainNetworkId.goerli]: undefined,
//   [BlockchainNetworkId.smartchain]: 'nftViewApiSmartchain',
//   [BlockchainNetworkId.ankrTest]: 'mainApiAnkr',
// };
// function getNftViewApiDriverName(
//   chainId: BlockchainNetworkId,
// ): NftViewApiDriverName {
//   return chainNftViewApiDriver[chainId] || 'nftViewApiSmartchain';
// }

type NftView2ApiDriverName =
  | 'nftView2ApiEthMainnet'
  | 'nftView2ApiEthRinkeby'
  | 'nftView2ApiSmartchain'
  | 'nftView2ApiSmartchainTest'
  | 'nftView2ApiHeco'
  | 'nftView2ApiMatic'
  | 'mainApiAnkr'
  | 'mainApiBas'
  | 'mainApiEdge'
  | 'mainApiBasMainnet';


// const chainNftView2ApiDriver: {
//   [key in BlockchainNetworkId]: NftView2ApiDriverName | undefined;
// } = {
//   [BlockchainNetworkId.mainnet]: 'nftView2ApiEthMainnet',
//   [BlockchainNetworkId.ropsten]: undefined,
//   [BlockchainNetworkId.goerli]: undefined,
//   [BlockchainNetworkId.smartchain]: 'nftView2ApiSmartchain',
//   [BlockchainNetworkId.ankrTest]: 'mainApiAnkr',
// };
// function getNftView2ApiDriverName(
//   chainId: BlockchainNetworkId,
// ): NftView2ApiDriverName {
//   return chainNftView2ApiDriver[chainId] || 'nftView2ApiSmartchain';
// }

export type DriverName =
  | MainApiDriverName
  | NftViewApiDriverName
  | NftView2ApiDriverName;

export function getTokenByDriver(
  driverName: DriverName,
  unitAddress?: Address,
) {
  if (
    driverName === 'mainApiEthMainnet' ||
    driverName === 'mainApiEthRinkeby'
  ) {
    if (unitAddress === ZERO_ADDRESS) {
      return TokenSymbol.ETH;
    }
  }

  if (driverName === 'mainApiSmartchain') {
    if (unitAddress === ZERO_ADDRESS) {
      return TokenSymbol.BNB;
    }
  }
  if (driverName === 'mainApiSmartTestChain') {
    if (unitAddress === ZERO_ADDRESS) {
      return TokenSymbol.BNB;
    }
  }

  if (driverName === 'mainApiAnkr') {
    if (unitAddress === ZERO_ADDRESS) {
      return TokenSymbol.ANKR;
    }
  }


  return DefaultTokenSymbol;
}

const mainAxios = {
  // mainApiEthMainnet: axios.create({
  //   baseURL: process.env.REACT_APP_API_BASE_ETH_MAINNET,
  // }),
  // mainApiEthRinkeby: axios.create({
  //   baseURL: process.env.REACT_APP_API_BASE_RINKEBY,
  // }),
  // mainApiSmartchain: axios.create({
  //   baseURL: process.env.REACT_APP_API_BASE_BSC_MAINNET,
  // }),
  // mainApiSmartTestChain: axios.create({
  //   baseURL: process.env.REACT_APP_API_BASE_BSC_TEST,
  // }),
  // mainApiHeco: axios.create({
  //   baseURL: process.env.REACT_APP_API_BASE_HECO,
  // }),
  // mainApiMatic: axios.create({
  //   baseURL: process.env.REACT_APP_API_BASE_MATIC,
  // }),
  // mainApiAirdrop: axios.create({
  //   baseURL: process.env.REACT_APP_API_BASE_AIRDROP,
  // }),
  // mainApiAnkr: axios.create({
  //   baseURL: process.env.REACT_APP_API_BASE_ANKR,
  // }),
  // mainApiBas: axios.create({
  //   baseURL: process.env.REACT_APP_API_BASE_BAS,
  // }),
  // mainApiEdge: axios.create({
  //   baseURL: process.env.REACT_APP_API_BASE_EDGE,
  // }),
  // mainApiBasMainnet: axios.create({
  //   baseURL: process.env.REACT_APP_API_BASE_BAS_MAINNET,
  // }),
  axios: axios.create({
    baseURL: process.env.REACT_APP_API_BASE,
  }),
};

type mainApiDriversType = keyof typeof mainAxios;

const mainApiDrivers: { [key in mainApiDriversType]: Driver } = {
  ...mainAxios,
};
Object.keys(mainAxios).forEach(key => {
  const initAxios = mainAxios[key as mainApiDriversType];
  initAxios.interceptors.response.use(response => {
    if ([-1, -2, 401].includes(response.data?.errorCode ?? response.data?.code)) {
      // store.dispatch(abortRequests());
      // store.dispatch(disconnect());
      // window.localStorage.clear();
      // clearLocalStorage();
      // window.sessionStorage.clear();
      // window.location.reload();
    }
    return response;
  });
  mainApiDrivers[key as mainApiDriversType] = createAxiosDriver(initAxios);
});

const { requestsReducer, requestsMiddleware } = handleRequests({
  driver: {
    default: createDriver({
      processResponse: response => ({ data: response }),
    }),
    ...mainApiDrivers,
    // axios: axios.create({
    //   baseURL: process.env.REACT_APP_API_BASE,
    // }),

  },
  onRequest: (request, action, store) => {
    const rootState: RootState = store.getState();

    const { data } = getQuery(rootState, {
      type: setAccount.toString(),
      action: setAccount,
    });
    console.log('data', data);


    // const chainId =
    //   data?.chainId ?? getChainId() ?? getNotWeb3WalletInfo()?.chainId;
    // const timestamp = getTimestamp() ?? data?.timestamp ?? '';
    // const address = data?.address ?? '';
    const ctx = getLocalStorageCtx();

    // console.log('chainId', chainId);
    const token: string = getJWTToken() ?? '';
    if (action.meta?.auth) {
      return {
        ...request,
        headers: {
          ...request.headers,
          'Authorization': token,
          // timestamp: timestamp,
          'Auth-Addr': ctx ? ctx.address : '',
          chainId: ctx ? ctx.network : '',
        },
      };
    }
    return request;
  },
  onSuccess: (response, action, store) => {
    if (response.data.code !== 0) {
      store.dispatch(
        NotificationActions.showNotification({
          message: response.data.message,
          severity: 'warning',
        }),
      );
    }
    return response;
  },
  onError: (error, action, store) => {
    // console.log("store", JSON.stringify(store))
    // console.log("error.response.status", JSON.stringify(error.response.status))
    // console.log('error.response', JSON.stringify(error.response))
    if (error && error.response && (error.response.status === 401)) {
      // store.dispatch(abortRequests());
      // store.dispatch(disconnect());
      // window.location.reload();
    }

    if (!action.meta?.suppressErrorNotification && (extractMessage(error) !== 'Error: data not found')) {
      // console.log(extractMessage(error));
      store.dispatch(
        NotificationActions.showNotification({
          message: extractMessage(error),
          severity: 'error',
        }),
      );
    }
    throw error;
  },
});

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  i18n: persistReducer(i18nPersistConfig, i18nSlice.reducer),
  requests: requestsReducer,
  router: connectRouter(historyInstance),
  notifications: notificationSlice.reducer,
  [LAYOUT_STATE_NAME]: layoutReducer,
  like: likeSlice.reducer,
  user: userSlice.reducer,
  btcContext: btcContext.reducer,
  homeStore: homeStore.reducer,
  jwtToken: jwtTokenStore.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...requestsMiddleware,
    routerMiddleware(historyInstance),
    sagaMiddleware,
  ],
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
