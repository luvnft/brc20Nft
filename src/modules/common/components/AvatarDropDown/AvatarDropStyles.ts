import { fade, Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/styles';

export const styles = (theme: Theme): StyleRules => ({
  root: {
    width: '30px',
    height: '30px',
    border: `1px solid ${theme.palette.grey[50]}`,
    display: 'flex',
    cursor: 'pointer',
    [theme.breakpoints.up('xs')]: {
      width: '20px',
      height: '20px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '20px',
      height: '20px',
    },
    [theme.breakpoints.up('md')]: {
      width: '30px',
      height: '30px',
    },
  },
  userIcon: {
    width: '17px',
    height: '17px',
    margin: 'auto',
    [theme.breakpoints.up('xs')]: {
      width: '11px',
      height: '11px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '11px',
      height: '11px',
    },
    [theme.breakpoints.up('md')]: {
      width: '17px',
      height: '17px',
    },
  },
  absolute: {
    display: 'flex',
    flexDirection: 'column',
    '& a:hover': {
      color: theme.palette.background.paper,
    },
  },

  link: {
    justifyContent: 'start',
    padding: ' 0 20px',
    borderRadius: 0,
    color: theme.palette.background.paper,
    '&:hove': {
      color: theme.palette.background.paper,
    },
    '&.active': {
      // background: '#2865EA',
      // color: theme.palette.text.primary,
      // borderRadius: 0,
    },
  },
  disconnect: {
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    cursor: 'pointer',
    fontFamily: 'Pixeloid Sans',
    fontWeight: 500,
    color: theme.palette.background.paper,
    fontSize: '14px',
  },
  active: {
    background: '#2865EA',
    color: `${theme.palette.common.white}`,
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
    // borderRadius: '12px',

    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3, 0, 2),
    border: `1px solid ${fade(theme.palette.grey[50], 1)}`,
  },

  dropdownActive: {
    opacity: 1,
    transform: 'translateY(0)',
    pointerEvents: 'auto',
  },

  ingWrap: {
    width: '25px',
    height: '25px',
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${theme.palette.grey[50]}`,
    '& svg':{
      width: '12px',
      height: '12px',
    }
  },
  profileImg: {
    width: '12px',
    height: '12px',
  },

});
