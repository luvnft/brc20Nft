import { createSlice } from '@reduxjs/toolkit';
import {getJWTToken} from '../../utils/localStorage';


interface initState {
  token: string;
  chain: string;
}

export const initialState: initState = {
  token: getJWTToken(),
  chain: 'btc',
};
export const jwtTokenStore = createSlice({
  name: 'jwtToken',
  initialState,
  reducers: {
    setJwtToken(state, action) {
      // console.log('payload:', action.payload);

      state.token = action.payload;
    },
    setChain(state, action) {
      state.chain = action.payload;
    },
  },
});
