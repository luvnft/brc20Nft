import { BrowserRouter } from 'react-router-dom';
import { NoSsr } from '@material-ui/core';
import { ScrollToTop } from 'modules/common/components/ScrollToTop';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistor, store } from 'store';
import { QueryLoadingAbsolute } from './modules/common/components/QueryLoading/QueryLoading';
import { AppBase } from './modules/layout/components/AppBase/AppBase';
import { Notifications } from './modules/notification/components/Notifications';
import { Routes } from './Routes';

import SwiperCore, { Autoplay, Pagination, Scrollbar } from 'swiper';
import { BtcProvider } from './modules/web3/wallet';
import './assets/js/rem';

if (process.env.REACT_APP_BASE_ENV === 'PRO') {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}
function App() {
  SwiperCore.use([Autoplay, Pagination, Scrollbar]);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <BtcProvider>
          <PersistGate loading={<QueryLoadingAbsolute />} persistor={persistor}>
            <AppBase>
              <ScrollToTop />
              <Routes />
              <NoSsr>
                <Notifications />
              </NoSsr>
            </AppBase>
          </PersistGate>
        </BtcProvider>

      </Provider>
    </BrowserRouter>

  );
}

export default App;
