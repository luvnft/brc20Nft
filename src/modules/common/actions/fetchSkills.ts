import { RequestAction } from '@redux-requests/core';
import { createAction as createSmartAction } from 'redux-smart-actions';

export interface IItemsInfo {
  id: number;
  color: string;
  image: string;
  quality: string;
}
interface IApiFetchPopularBrandsData {
  code: 200;
  data: IItemsInfo[];
  msg: string;

}

export interface IBrandItem {
  data: IItemsInfo[];
}

export const fetchSkills = createSmartAction<
  RequestAction<IApiFetchPopularBrandsData, IItemsInfo[]>
>("NFTMarket/fetchSkills", () => ({
  request: {
    url: '/get_skills?language=en',
    method: 'get',
    data: {},
  },
  meta: {
    auth: false,
    driver: 'axios',
    asMutation: false,
    takeLatest:false,
    getData: data => {
      return (data?.data ?? []);
    },
  },
}));
