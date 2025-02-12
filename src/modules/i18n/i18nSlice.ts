import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Locale } from './types/locale';

export interface I18nSlice {
  locale: Locale;
}

const initialState: I18nSlice = {
  locale: localStorage.lang || Locale.en,
};

export const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    setLocale: (state, action: PayloadAction<Locale>) => {
      state.locale = action.payload;
    },
  },
});

export const { setLocale } = i18nSlice.actions;
