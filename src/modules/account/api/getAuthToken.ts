import { createAction as createSmartAction } from 'redux-smart-actions';
import { RequestAction } from '@redux-requests/core';

export interface IParams {
  accountaddress: string;
  message: string;
  signature: string;
}

export const getAuthToken = createSmartAction<RequestAction>(
  'getAuthToken',
  (params: IParams) => ({
    request: {
      url: 'https://ape-dev.ankr.com/nft-market-console/v1/login',
      method: 'post',
      data: params,
    },
    meta: {
      driver: 'axios',
    },
    getData: (res: any) => {
      return {
        data: {
          data: {
            "token": res.data.accessToken
          }
        }
      }
    },
  }),
);
