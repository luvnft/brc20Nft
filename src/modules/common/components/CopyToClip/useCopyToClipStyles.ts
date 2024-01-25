import { makeStyles, Theme,fade } from '@material-ui/core';

export const useCopyToClipStyles = makeStyles<Theme>(theme => ({
  root:{
    border:`1px solid ${theme.palette.grey[50]}`,
    padding: '0 10px',
    height: '24px',
    '&.userAddress':{
      border:'none',
      padding:'2px 0 0 0'
    },

  },
  addressText: {
    width:'100%',
    height:'100%',
    color: fade(theme.palette.common.black,.9),
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
  },

  clipboardBtn: {
    fontSize: 20,
    border: 'none !important',
    marginLeft: theme.spacing(1),
    color: fade(theme.palette.common.white,.9),
  },

  clipboardBtnIcon: {
    width:'13px',
    height:'13px'
  },

  clipboardBtnIconDone: {
    fontSize: 'inherit',
    color: theme.palette.success.light,
  },
  tooltip:{},
  arrow:{},
}));
