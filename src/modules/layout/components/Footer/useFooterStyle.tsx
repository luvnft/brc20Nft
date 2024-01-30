import {makeStyles, Theme} from '@material-ui/core';

export const useFooterStyle = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '8rem',
    backgroundColor: '#1A1B31',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 27rem',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      padding: '0 0 19.4rem 0',
      justifyContent: 'center',
      backgroundColor: '#121323',
    },
  },
}));
