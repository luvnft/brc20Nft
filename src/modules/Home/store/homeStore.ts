import { createSlice } from '@reduxjs/toolkit';


interface homeStoreInterface {
  height: number
}

const initialState: homeStoreInterface = {
  height: document.body.clientHeight,

};
export const homeStore = createSlice({
  name: 'homeStore',
  initialState,
  reducers: {
    setWinHeight(state, action) {
      state.height = action.payload;
    },
  },
});


const { setWinHeight } = homeStore.actions;
export { setWinHeight };
