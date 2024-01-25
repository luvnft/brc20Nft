import { makeStyles, Theme } from '@material-ui/core';

export const useCopyTextStyle = makeStyles((theme: Theme) => ({
  root: {

  },
  walletAddress: {
    // paddingLeft: '12px',
    display: 'flex',
    alignItems: 'center',
    // fontSize: '12px',
    // fontFamily: 'Roboto-Regular, Roboto',
    // fontWeight: 400,
    // color: `${theme.palette.grey[50]}`,
  },
  copy: {
    width: '14px',
    height: '14px',
    marginLeft: '7px',
    '&:active': {
      width: '12px',
      height: '12px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '12px',
      height: '12px',
      marginLeft: '5px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '12px',
      height: '12px',
      marginLeft: '5px',
    },
    [theme.breakpoints.up('HD')]: {
      width: '12px',
      height: '12px',
      marginLeft: '5px',
    },
    [theme.breakpoints.up('WXGAPlus')]: {
      width: '12px',
      height: '12px',
      marginLeft: '5px',
    },
    [theme.breakpoints.up('HDPlus')]: {
      width: '14px',
      height: '14px',
      marginLeft: '7px',
    },
  },
  tooltip: {
    width: '38px',
    height: '31px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9A97E9',
    fontSize: '12px',
    // fontFamily: 'Roboto-Medium, Roboto',
    fontWeight: 500,
    color: '#ffffff',
  },

  tooltipAuto:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9A97E9',
    fontSize: '12px',
    // fontFamily: 'Roboto-Medium, Roboto',
    fontWeight: 500,
    padding:'10px',
    color: '#ffffff',
  },
  arrow: {
    color: '#9A97E9',
  },
}));
