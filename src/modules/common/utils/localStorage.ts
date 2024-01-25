import { BlockchainNetworkId } from '../conts';
// import {getSessionStorageJWTToken,setSessionStorageJWTToken} from './sessionStorage';
// import {setToken} from './cookie';

export const getJWTToken = () => {
  return localStorage.token;
  // return getSessionStorageJWTToken();
};
export const setJWTToken = (token: string) => {
  localStorage.setItem('token', token);
  // setSessionStorageJWTToken(token);
  // setToken(token);
};

export const getLoginType = () => {
  return localStorage.login;
};
export const setLoginType = (type: string) => {
  localStorage.setItem('login', type);
};
export const getChainName = () => {
  return localStorage.chainName;
};
export const setChainName = (chainName: string) => {
  localStorage.setItem('chainName', chainName);
};
export const setChainId = (id: number) => {
  localStorage.chainId = id;
};
export const setTimestamp = (id: string) => {
  localStorage.timestamp = id;
};

export const getTimestamp = () => {
  return localStorage.timestamp;
};

export const getChainId = () => {
  return localStorage.chainId && parseInt(localStorage.chainId, 10) !== 0
    ? parseInt(localStorage.chainId, 10)
    :
    BlockchainNetworkId.mainnet;
  // TODO chainId may invalid
};
export const getSearchAddress = () => {
  let address = localStorage.searchAddress;
  return address ? JSON.parse(address) : [];
};
export const setSearchAddress = (address: any) => {
  localStorage.setItem('searchAddress', JSON.stringify(address));
};
export const setLocalStorageCtx = (ctx: any) => {
  localStorage.setItem('ctx', ctx);
};
export const getLocalStorageCtx = () => {
  let ctx = localStorage.getItem('ctx');
  return ctx ? JSON.parse(ctx) : null;
};
export const clearLocalStorage = () => {
  localStorage.removeItem('chainName');
  localStorage.removeItem('timestamp');
  // localStorage.removeItem('token');
  localStorage.removeItem('chainId');
};
