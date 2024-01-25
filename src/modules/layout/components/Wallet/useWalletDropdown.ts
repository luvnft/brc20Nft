import { useLayout } from 'modules/layout/hooks/useLayout';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { disconnect } from 'modules/account/store/actions/disconnect';
import { useHistory } from 'react-router-dom';
import {HomeRoutesConfig} from 'modules/Home/Routes';
// import { clearLocalStorage } from 'modules/common/utils/localStorage';


export function useWalletDropdown() {
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { toggleNav, mobileNavShowed } = useLayout();
  const history = useHistory();

  const handleClose = useCallback(() => {
    if (isOpen) {
      setOpen(false);
    }

    if (mobileNavShowed) {
      toggleNav(false);
    }
  }, [isOpen, mobileNavShowed, toggleNav]);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleDisconnect = useCallback(() => {

    // window.localStorage.clear();
    // clearLocalStorage();
    // window.sessionStorage.clear();
    dispatch(disconnect());
    setOpen(false);
    history.push(HomeRoutesConfig.Index.path);

  }, [dispatch, history]);

  return {
    isOpened: isOpen,
    handleDisconnect,
    handleClose,
    handleOpen,
  };
}
