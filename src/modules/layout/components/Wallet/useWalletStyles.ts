import { makeStyles, Theme } from '@material-ui/core';

export const useWalletStyles = makeStyles<Theme>(theme => ({
  accountBtn: {
    color: "#fff",
    padding: 0,
    border: 'none',
    height: '28px',
    backgroundColor: 'transparent',
    borderRadius: '0px',
    width: '46px',
    minWidth: 'auto',
    '&:before': {
      display: 'none',
    },
  },

  accountBtnMd: {
    marginBottom: theme.spacing(2.5),
  },
  userIcon:{
    width:'15px',
    height:'17px'
  },

  walletLogo: {
    width: 44,
    height: 44,
    marginLeft: theme.spacing(1.5),
    borderRadius: '50%',
  },

  dropdown: {
    width: 240,
    position: 'absolute',
    zIndex: theme.zIndex.tooltip,
    top: `calc(100% - ${theme.spacing(1)}px)`,
    right: theme.spacing(3),

    pointerEvents: 'none',
    opacity: 0,
    transform: `translateY(${theme.spacing(-1)}px)`,
    transition: 'opacity 0.2s, transform 0.2s',
  },

  dropdownActive: {
    opacity: 1,
    transform: 'translateY(0)',
    pointerEvents: 'auto',
  },
}));
