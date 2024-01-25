import axios from 'axios';
import { createAction as createSmartAction } from 'redux-smart-actions';
import { RequestAction } from '@redux-requests/core';
// import { IResponse } from 'modules/common/types/ResponseData';
import {
    getJWTToken, getTimestamp
} from 'modules/common/utils/localStorage';


export interface IProfileData {
    address: string,
    banner: string,
    bio: string,
    email: string,
    facebook: string,
    image: string,
    instagram: string,
    registerTime: number,
    twitter: string,
    username: string
}

export const fromatTimers = (timer: number) => {
    const dates = new Date(timer);
    const en_mon_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    return en_mon_arr[dates.getMonth()] + ' ' + dates.getFullYear();
}


export const uploadAsyncImg = async (file: any) => {
    const token = getJWTToken() ?? '';
    let res;
    await axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_BASE}/s3/v1/admin/images`,
        data: file,
        headers: {
            token: token ?? '',
        }
    }).then((response) => {
        res = response.data;
    }, error => {
        res = error.response.data;
    })
    return res
}

export const getProfile = createSmartAction<
    any, [{
        address: string;
    },]
>('getProfile', ({ address }) => ({
    request: {
        url: `${process.env.REACT_APP_API_BASE}/client/market/v1/profile/${address}`,
        method: 'get',
        params: {
            address: address,
            sign: getJWTToken() ?? '',
            timestamp: getTimestamp() ?? '',
        },
    },
    meta: {
        auth: true,
        driver: 'axios',
        asMutation: false,
        takeLatest:false,
        getData: (data: any) => {
            if (data.code === 200) {
                return data.data;
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

export const postProfile = createSmartAction<
    any, [{
        address: string;
    },]
>('postProfile', (address) => ({
    request: {
        url: `${process.env.REACT_APP_API_BASE}/client/market/v1/profile`,
        method: 'post',
        data: {
            address: address,
        },
    },
    meta: {
        auth: false,
        driver: 'axios',
        asMutation: false,
        getData: (data: any) => {
            if (data.code === 200) {
                return data.data;
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

export const updateProfile = createSmartAction<
    any, [{
        address: string;
        banner: string;
        bio: string;
        facebook: string;
        image: string;
        instagram: string;
        phone: string;
        twitter: string;
        username: string
    },]
>('updateProfile', ({
    address,
    banner,
    bio,
    facebook,
    image,
    instagram,
    phone,
    twitter,
    username
}) => ({
    request: {
        url: `${process.env.REACT_APP_API_BASE}/client/market/v1/profile/${address}`,
        method: 'put',
        data: {
            address: address,
            banner: banner,
            bio: bio,
            facebook: facebook,
            image: image,
            instagram: instagram,
            phone: phone,
            twitter: twitter,
            username: username
        },
    },
    meta: {
        auth: false,
        driver: 'axios',
        asMutation: false,
        getData: (data: any) => {
            if (data.code === 200) {
                return data.data;
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

export const sendEmailCode = createSmartAction<
    any, [{
        email: string;
    },]
>('sendEmailCode', ({ email }) => ({
    request: {
        url: `${process.env.REACT_APP_API_BASE}/client/market/v1/code`,
        method: 'post',
        data: {
            email: email,
        },
    },
    meta: {
        auth: false,
        driver: 'axios',
        asMutation: false,
        getData: (data: any) => {
            if (data && data.code === 200) {
                return data.data;
            } else {
                return data;
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

export const confirmEmailCode = createSmartAction<
    any, [{
        email: string;
        address: string;
        code: string,
    },]
>('confirmEmailCode', ({ email, address, code }) => ({
    request: {
        url: `${process.env.REACT_APP_API_BASE}/client/market/v1/email`,
        method: 'post',
        data: {
            email: email,
            address: address,
            code: code
        },
    },
    meta: {
        auth: false,
        driver: 'axios',
        asMutation: false,
        getData: (data: any) => {
            if (data.code === 200) {
                return data.data;
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


export const getUserActivities = createSmartAction<
    any, [{
        address: string;
        page?: number;
        pageSize?: number;
    },]
>('getUserActivities', ({ address, page, pageSize }) => ({
    request: {
        url: `${process.env.REACT_APP_API_BASE}/client/market/v1/assets/activities/${address}`,
        method: 'get',
        params: {
            // address: address,
            projectType: process.env.REACT_APP_BASE_ENV_BRANCH === 'DFDUNK' ? 1 : 2,
            page: 1,
            pageSize: 100
        },
    },
    meta: {
        auth: true,
        driver: 'axios',
        asMutation: false,
        getData: (data: any) => {
            if (data.code === 200) {
                return data.data;
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

export const getUserFavorite = createSmartAction<
    any, [{
        address: string;
        page: number;
        pagesize: number;
    },]
>('getUserFavorite', ({ address, page, pagesize }) => ({
    request: {
        url: `${process.env.REACT_APP_API_BASE}/client/market/v1/assets/favorite/${address}`,
        method: 'get',
        params: {
            // address: address,
            projectType: process.env.REACT_APP_BASE_ENV_BRANCH === 'DFDUNK' ? 1 : 2,
            page: page,
            pageSize: pagesize
        },
    },
    meta: {
        auth: true,
        driver: 'axios',
        asMutation: false,
        getData: (data: any) => {
            if (data.code === 200) {
                return data.data;
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

export const getUserCollected = createSmartAction<
    any, [{
        address: string;
        saleType?: string;
        collectionAddress?: string;
        page: number;
        pagesize: number
    },]
>('getUserCollected', ({ address, saleType, collectionAddress, page, pagesize }) => ({
    request: {
        url: collectionAddress ? `${process.env.REACT_APP_API_BASE}/client/market/v1/assets/collected/${address}?projectType=${process.env.REACT_APP_BASE_ENV_BRANCH === 'DFDUNK' ? 1 : 2}&page=${page}&pageSize=${pagesize}&saleType=${saleType || 'none'}&collectionAddress=${collectionAddress}` :
            `${process.env.REACT_APP_API_BASE}/client/market/v1/assets/collected/${address}?projectType=${process.env.REACT_APP_BASE_ENV_BRANCH === 'DFDUNK' ? 1 : 2}&page=${page}&pageSize=${pagesize}&saleType=${saleType || 'none'}`,
        method: 'get',
        params: {
        },
    },
    meta: {
        auth: true,
        driver: 'axios',
        asMutation: false,
        getData: (data: any) => {
            if (data.code === 200) {
                return data.data;
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


export const getUserCollection = createSmartAction<
    any, [{
        address: string;
    },]
>('getUserCollection', ({ address }) => ({
    request: {
        url: `${process.env.REACT_APP_API_BASE}/client/market/v1/assets/collection/${address}`,
        method: 'get',
        params: {
            projectType: process.env.REACT_APP_BASE_ENV_BRANCH === 'DFDUNK' ? 1 : 2,
        },
    },
    meta: {
        auth: true,
        driver: 'axios',
        asMutation: false,
        getData: (data: any) => {
            if (data.code === 200) {
                return data.data;
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












