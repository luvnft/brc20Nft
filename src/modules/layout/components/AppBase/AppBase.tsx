import {CssBaseline} from '@material-ui/core';
import {MuiThemeProvider} from '@material-ui/core/styles';
import {useMutation} from '@redux-requests/react';
import {ConnectedRouter} from 'connected-react-router';
import {Web3ModalStyles} from 'modules/account/components/Web3ModalStyles';
import {updateAccount} from 'modules/account/store/actions/updateAccount';
import React, {ReactNode, useEffect, useState} from 'react';
import intl from 'react-intl-universal';
import {ReactReduxContext} from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/swiper-bundle.min.css';
import 'react-photo-view/dist/react-photo-view.css';
import 'swiper/swiper-bundle.css';
// import 'assets/css/index';
import 'assets/css/font.css';
import 'assets/css/common.css';
import 'assets/css/animate.min.css';
import 'assets/css/animation.css';
import {QueryLoadingAbsolute} from 'modules/common/components/QueryLoading/QueryLoading';
import {historyInstance} from 'modules/common/utils/historyInstance';
import {locales} from 'modules/i18n';
import {useLocale} from 'modules/i18n/utils/useLocale';
import {CurrentTheme} from 'modules/themes/types';
import {getTheme} from 'modules/common/utils/getTheme';
import {setWinHeight} from 'modules/Home/store/homeStore';
import {useAppDispatch} from 'store/useAppDispatch';

interface IAppBaseProps {
  children: ReactNode;
}

export const AppBase = ({children}: IAppBaseProps) => {
  const [initDone, setInitDone] = useState(false);
  const {locale} = useLocale();
  const {loading} = useMutation({
    type: updateAccount.toString(),
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    const loadWinSize = async () => {
      function sizeFn() {
        const clientHeight = document.body.clientHeight;
        dispatch(setWinHeight(clientHeight));
      }

      sizeFn();
      window.addEventListener('resize', sizeFn);
    };
    loadWinSize().then();
    return () => {
      window.removeEventListener('resize', loadWinSize);
    };
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setInitDone(false);
    intl
      .init({
        currentLocale: locale,
        locales,
        fallbackLocale: 'en-US',
      })
      .then(() => {
        setInitDone(true);
      });
  }, [locale]);


  return (
    <MuiThemeProvider theme={getTheme(CurrentTheme)}>
      <CssBaseline/>
      <Web3ModalStyles/>
      {!initDone || loading ? (
        <>
          <QueryLoadingAbsolute/>
        </>

      ) : (
        <ConnectedRouter history={historyInstance} context={ReactReduxContext}>
          {children}
        </ConnectedRouter>
      )}
    </MuiThemeProvider>
  );
};
