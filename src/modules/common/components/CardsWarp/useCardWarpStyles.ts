import { makeStyles, Theme } from '@material-ui/core';
// import { getPercentage } from 'modules/common/utils/styleUtils';
export const useCardWarpStyles = makeStyles<Theme>(theme => ({
  row: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: theme.spacing(0),
    backgroundColor:'transparent',
  },

  col: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginTop: theme.spacing(1),
    // xs: 0,
    // sm: 576,
    // md: 768,
    // lg: 992,
    // xl: 1200,
    // HD: 1366,
    // WXGAPlus: 1440,
    // HDPlus: 1600,
    [theme.breakpoints.up('xs')]: {
      // paddingRight: 0,
      // marginTop: theme.spacing(2),

      // flex: '0 0 auto',
      // width: getPercentage(1, 3),
      // maxWidth: getPercentage(1, 3),
      // paddingRight: theme.spacing(1.5),
      // marginTop: theme.spacing(2.5),
    },
    [theme.breakpoints.up('sm')]: {
      // flex: '0 0 auto',
      // width: getPercentage(1, 3),
      // maxWidth: getPercentage(1, 3),
      // paddingRight: theme.spacing(1.5),
      // marginTop: theme.spacing(2.5),
    },
    [theme.breakpoints.up('lg')]: {
      // flex: '0 0 auto',
      // width: getPercentage(1, 3),
      // maxWidth: getPercentage(1, 3),
      // paddingRight: theme.spacing(1.5),
      // marginTop: theme.spacing(2.5),
    },
    [theme.breakpoints.up('md')]: {
      // flex: '0 0 auto',
      // width: getPercentage(1, 3),
      // maxWidth: getPercentage(1, 3),
      // paddingRight: theme.spacing(1.5),
      // marginTop: theme.spacing(2.5),
    },
    [theme.breakpoints.up('xl')]: {
      // flex: '0 0 auto',
      // width: getPercentage(1, 3),
      // maxWidth: getPercentage(1, 3),
      // paddingRight: theme.spacing(1.5),
      // marginTop: theme.spacing(2.5),
    },
    [theme.breakpoints.up('HD')]: {
      // flex: '0 0 auto',
      // width: getPercentage(1, 3),
      // maxWidth: getPercentage(1, 3),
      // paddingRight: theme.spacing(1.5),
      // marginTop: theme.spacing(2.5),
    },

    [theme.breakpoints.up('WXGAPlus')]: {
      // maxWidth: getPercentage(1, 3),
      // paddingRight: theme.spacing(2),
      // marginTop: theme.spacing(4),
    },
    [theme.breakpoints.up('HDPlus')]: {
      // maxWidth: getPercentage(1, 3),
      // paddingRight: theme.spacing(2),
      // marginTop: theme.spacing(4),
    },
  },
}));
