import { makeStyles, Theme } from '@material-ui/core';

export const useTokenImgStyle = makeStyles<Theme>(theme => ({
  root: {
    width: '12px',
    height: '19px',
    marginRight: '8px',
    '&.USDT': {
      width: '18px',
      height: '18px',
    },
    '&.mini': {
      width: '9px',
      height: '16px',
      '&.USDT':{
        width: '14px',
        height: '14px',
      }
    },
  },
}));
