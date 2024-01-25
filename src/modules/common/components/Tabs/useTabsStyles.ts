import { fade, makeStyles, Theme } from '@material-ui/core';



export const useTabsStyles = makeStyles<Theme>(
  theme => ({
    root: {
      position: 'relative',
    },
    selected:{
      color: `${theme.palette.grey[50]}`,
      background: 'rgba(255,201,4,0.08)',
      borderRadius: '4px',
    },
    tradeSelected:{
      color: `${theme.palette.grey[50]}`,
      backgroundColor: `${theme.palette.grey['A700']}`,
      borderRadius: '4px 4px 0px 0px',
    },
    buySelected:{
      color: `${theme.palette.grey[300]}`,
      backgroundColor: `${theme.palette.grey[200]}`,
      borderRadius: '4px',
    },
    sellSelected:{
      color: `${theme.palette.grey[300]}`,
      backgroundColor: `${theme.palette.grey[700]}`,
      borderRadius: '4px',
    },
    notNeedBGSelected:{
      color: `${theme.palette.grey[50]}`,
      background: 'transparent',
      borderRadius: '0',
    },
    tab: {
      fontSize: 14,
      padding:'8px 20px',
      // background: '#3B3B3B',
      // borderRadius: '4px',
      [theme.breakpoints.up('lg')]: {
        fontSize: 12,
        padding:'10px 10px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: 12,
        padding:'10px 10px',
      },
      [theme.breakpoints.up('HD')]: {
        fontSize: 12,
        padding:'10px 10px',
      },
      [theme.breakpoints.up('WXGAPlus')]: {
        fontSize: 14,
        padding:'8px 10px',
      },
      [theme.breakpoints.up('HDPlus')]: {
        fontSize: 14,
        padding:'8px 20px',
      },
    },
    indicator: {
      height: '0',
      background: `${theme.palette.grey[50]} !important`,
    },

    tabWrapper: {
      flexDirection: 'row',
      fontFamily: 'Pretendard',
      fontWeight: 400,
    },

    tabCount: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 23,
      minWidth: 23,
      padding: theme.spacing(0, 0.75),
      marginLeft: theme.spacing(0.75),
      border: `2px solid ${fade(theme.palette.text.primary, 0.1)}`,
      borderRadius: 23,
      fontSize: 12,
      fontWeight: 700,
    },
    indicatorBuy: {
      backgroundColor: `${theme.palette.grey[200]}`,
    },
    indicatorSell: {
      backgroundColor: `${theme.palette.grey[700]}`,
    },
    indicatorNeedBottom:{
      height: '2px',
      background: `${theme.palette.grey[50]}`,
    },
    indicatorNeedBottom3:{
      height: '3px',
      background: '#262626'
    },
  }),
  { index: 1 },
);
