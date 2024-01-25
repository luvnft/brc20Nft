
import { createAction as createSmartAction } from 'redux-smart-actions';
import { RequestAction } from '@redux-requests/core';
import {RequestApi} from 'assets/js/Api';
export const searchPairByType = createSmartAction<
  any, [{
  content: string;
  typeName: string;
  limit?:number
},]
  >('searchPairByTokenAddress', (data) => ({
  request: {
    url: `${process.env.REACT_APP_API_BASE}${RequestApi.search.searchPairByType}`,
    method: 'get',
    params: data,
  },
  meta: {
    auth: false,
    driver: 'axios',
    asMutation: false,
    takeLatest:false,
    getData: (data: any) => {
      return data;
    },
    onSuccess: (
      response: any,
      action: RequestAction,
    ) => {
      return response;
    },
  },
}));

export const searchPairByTokenAddress = createSmartAction<
  any, [{
  tokenAddress: string;
},]
  >('searchPairByTokenAddress', (data) => ({
  request: {
    url: `${process.env.REACT_APP_API_BASE}${RequestApi.search.searchPairByTokenAddress}`,
    method: 'get',
    params: data,
  },
  meta: {
    auth: false,
    driver: 'axios',
    asMutation: false,
    takeLatest:false,
    getData: (data: any) => {
      return data;
    },
    onSuccess: (
      response: any,
      action: RequestAction,
    ) => {
      return response;
    },
  },
}));


export const pairInfos = createSmartAction<
  any, [{
  pairAddress: string;
},]
  >('pairInfos', (data) => ({
  request: {
    url: `${process.env.REACT_APP_API_BASE}${RequestApi.search.pairInfos}`,
    method: 'get',
    params: data,
  },
  meta: {
    auth: false,
    driver: 'axios',
    asMutation: false,
    takeLatest:false,
    getData: (data: any) => {
      return data;
    },
    onSuccess: (
      response: any,
      action: RequestAction,
    ) => {
      return response;
    },
  },
}));

export const getPairTxList = createSmartAction<
  any, [{
  pairAddress: string;
  page:number;
  pageSize:number;
},]
  >('pairTxList', (data) => ({
  request: {
    url: `${process.env.REACT_APP_API_BASE}${RequestApi.search.pairTxList}`,
    method: 'get',
    params: data,
  },
  meta: {
    auth: false,
    driver: 'axios',
    asMutation: false,
    takeLatest:false,
    getData: (data: any) => {
      return data;
    },
    onSuccess: (
      response: any,
      action: RequestAction,
    ) => {
      return response;
    },
  },
}));
export const searchPairTxListByAddress = createSmartAction<
  any, [{
  pairAddress: string;
  address: string;
  page:number;
  pageSize:number;
},]
  >('searchPairTxListByAddress', (data) => ({
  request: {
    url: `${process.env.REACT_APP_API_BASE}${RequestApi.search.searchPairTxListByAddress}`,
    method: 'get',
    params: data,
  },
  meta: {
    auth: false,
    driver: 'axios',
    asMutation: false,
    takeLatest:false,
    getData: (data: any) => {
      return data;
    },
    onSuccess: (
      response: any,
      action: RequestAction,
    ) => {
      return response;
    },
  },
}));


export const searchTxListByAddress = createSmartAction<any, [{
  address: string;
  page:number;
  pageSize:number;
},]
  >('searchTxListByAddress', (data) => ({
  request: {
    url: `${process.env.REACT_APP_API_BASE}${RequestApi.search.searchTxListByAddress}`,
    method: 'get',
    params: data,
  },
  meta: {
    auth: false,
    driver: 'axios',
    asMutation: false,
    takeLatest:false,
    getData: (data: any) => {
      return data;
    },
    onSuccess: (
      response: any,
      action: RequestAction,
    ) => {
      return response;
    },
  },
}));

export const searchTxListByAddressAndZone = createSmartAction<any, [{
  address: string;
  loc:string; // Asia/Shanghai
  page?:number;
  pageSize?:number;
  type?: number | string; // 交易类型：0-buy/1-sell
},]
  >('searchTxListByAddress', (data) => ({
  request: {
    url: `${process.env.REACT_APP_API_BASE}${RequestApi.search.searchTxListByAddressAndZone}`,
    method: 'get',
    params: data,
  },
  meta: {
    auth: false,
    driver: 'axios',
    asMutation: false,
    takeLatest:false,
    getData: (data: any) => {
      return data;
    },
    onSuccess: (
      response: any,
      action: RequestAction,
    ) => {
      return response;
    },
  },
}));



