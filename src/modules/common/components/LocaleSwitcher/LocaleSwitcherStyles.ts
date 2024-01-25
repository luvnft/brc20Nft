import { fade, Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/styles';

export const styles = (theme: Theme): StyleRules => ({
  root: {
    width: '30px',
    height: '30px',
    border: `1px solid ${theme.palette.grey[50]}`,
    display: 'flex',
    cursor: 'pointer',
    marginLeft:'10px',
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
  },
  language: {
    width: '100%',
    height: '44px',
    fontSize: '14px',
    padding: '0 20px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontWeight: 500,
    color: theme.palette.common.white,
    '&:hover':{
      background: fade(theme.palette.common.white,.1),
    }
  },
  link: {
    justifyContent: 'start',
    padding: ' 0 20px',
    borderRadius: 0,
    '&.active': {
      background: fade(theme.palette.common.white,.1),
      color: `${theme.palette.common.white}`,
      borderRadius: 0,
    },
  },
  disconnect: {
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    cursor: 'pointer',
    fontWeight: 500,
    color: theme.palette.common.white,
    fontSize: '14px',
  },
  active: {
    background: fade(theme.palette.common.white,.1),
    color: `${theme.palette.common.white}`,
  },

  dropdown: {
    width: '240px',
    position: 'absolute',
    zIndex: theme.zIndex.tooltip,
    top: '100%',//`calc(100% - ${theme.spacing(1)}px)`,
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

});
