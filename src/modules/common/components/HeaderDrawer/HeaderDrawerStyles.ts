import { Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/styles';

export const styles = (theme: Theme): StyleRules => ({
  root: {
    width: '30px',
    height: '30px',
    border: `1px solid ${theme.palette.grey[50]}`,
    display: 'flex',
    cursor: 'pointer',
    margin: '0 10px',
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
    width: '15px',
    height: '17px',
    margin:'auto',
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
  drawerBody: {
    padding: '0 41px',
    width: '371px',
    height: '100%',
    backgroundColor: theme.palette.background.default,
    borderLeft:`1px solid ${theme.palette.grey[50]}`
  },
});
