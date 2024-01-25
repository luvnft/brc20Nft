import { RequestAction } from '@redux-requests/core';
import { IResponse } from 'modules/common/types/ResponseData';
// import { Store } from 'redux';
// import { RootState } from 'store';
import { createAction as createSmartAction } from 'redux-smart-actions';

export interface IDfdunkSnsData {
  discord: string;
  facebook: string;
  instagram: string;
  telegram: string;
  twitter: string
}
export interface IDfdunkTabDate {
  id?: number;
  nameEn?: string;
  nameJp?: string;
  nameZh?: string;
  number?: boolean;
  link?: string;
  status?: true
}

export interface IDfdunkLogoData {
  h5Logo: string;
  logo: string;
  nameEn: string;
  nameJp: string;
  nameZh: string
}


export const getDfdunkTab = createSmartAction<
  RequestAction<IResponse<IDfdunkTabDate[]>, IDfdunkTabDate[]>
>('dfdunk/getDfdunkTab', (meta?: any) => ({
  request: {
    url: `${process.env.REACT_APP_API_BASE}/${process.env.REACT_APP_BASE_ENV_URL}/client/client/v1/tab`,
    method: 'get',
  },
  meta: {
    auth: false,
    driver: 'axios',
    asMutation: false,
    takeLatest:false,
    getData: data => {
      return data.data;
    },
    ...meta,
    onSuccess: (
      response: any,
      action: RequestAction,
    ) => {
      return response;
    },
  },
}));

export const getDfdunkLogo = createSmartAction<
  RequestAction<IResponse<IDfdunkLogoData>, IDfdunkLogoData>
>('dfdunk/getDfdunkLogo', (meta?: any) => ({
  request: {
    url: `${process.env.REACT_APP_API_BASE}/${process.env.REACT_APP_BASE_ENV_URL}/client/client/v1/logo`,
    method: 'get',
  },
  meta: {
    auth: false,
    driver: 'axios',
    asMutation: false,
    getData: data => {
      if (data.code === 200) {
        return data.data;
      } else {
        // console.log(data)
      }
    },
    ...meta,
    onSuccess: (
      response: any,
      action: RequestAction,
    ) => {
      return response;
    },
  },
}));
export const getDfdunkSns = createSmartAction<
  RequestAction<IResponse<IDfdunkSnsData>, IDfdunkSnsData>
>('dfdunk/getDfdunkSns', (meta?: any) => ({
  request: {
    url: `${process.env.REACT_APP_API_BASE}/${process.env.REACT_APP_BASE_ENV_URL}/client/client/v1/sns`,
    method: 'get',
  },
  meta: {
    auth: false,
    driver: 'axios',
    asMutation: false,
    getData: data => {
      return data.data;
    },
    ...meta,
    onSuccess: (
      response: any,
      action: RequestAction,
    ) => {
      return response;
    },
  },
}));

export const fetchCurrencyRate = createSmartAction<
  any, []
>('fetchCurrencyRate', () => ({
  request: {
    url: `${process.env.REACT_APP_API_BASE}/client/market/v1/currency_rate`,
    method: 'get',
  },
  meta: {
    auth: true,
    driver: 'axios',
    asMutation: false,
    getData: (data: any) => {
      if (data.code === 200) {
        return data.data.sort(formatCurrency);
      } else {
        return {};
      }
    },
    onSuccess: (
      response: any,
      action: RequestAction,
    ) => {
      return response;
    },
  },
}));


const formatCurrency = (a: any, b: any) => {
  return b.rate_usd - a.rate_usd;
}
