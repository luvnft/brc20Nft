import {createAction as createSmartAction} from 'redux-smart-actions';
import {RequestAction} from '@redux-requests/core';
import {RequestApi} from 'assets/js/Api';

export interface AuthInterface{
  wallet_address: string;
  timestamp: number;
  signature: string;
  invite_code?:any
}
export const login = createSmartAction<any,[AuthInterface]>('login',(data)=>({
  request:{
    url:`${process.env.REACT_APP_API_BASE}${RequestApi.login.login}`,
    method:'post',
    data:data
  },
  meta:{
    auth:false,
    driver:'axios',
    asMutation:false,
    getData:(data:any)=>{
      return data
    },
    onSuccess:(
      response:any,
      action:RequestAction
    )=>{
      return response
    }
  }
}))

