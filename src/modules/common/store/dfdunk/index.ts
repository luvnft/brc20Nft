import { createAction as createSmartAction } from 'redux-smart-actions';
import { DispatchRequest, RequestAction } from '@redux-requests/core';
import { Store } from 'redux';
import { RootState } from '../../../../store';
import { getDfdunkTab } from 'modules/common/actions/commonRequest';

export interface IGetCommonRequest {
    dfdunkTab: string;
}

export const getCommonRequest = createSmartAction(
    'getCommonRequest',
    (data?: IGetCommonRequest) => ({
        request: {
            promise: (async function () { })(),
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
                        const dfdunkTab = await store.dispatchRequest(
                            getDfdunkTab(),
                        );
                        return {
                            dfdunkTab,
                        };
                    })(),
                };
            },
            // TODO custom notification. Filter close modal error
            suppressErrorNotification: true,
            getData: (data: IGetCommonRequest) => data,
            onSuccess: (
                response: { data: IGetCommonRequest },
                action: RequestAction,
            ) => {
                // console.log("-------------")
                // const provider = response.data.provider;
                // delete response.data.provider;
                // if (action.meta) {
                //   action.meta.provider = provider;
                // }
                return response;
            },
        },
    }),
);

