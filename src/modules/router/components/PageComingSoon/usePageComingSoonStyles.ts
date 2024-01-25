import { makeStyles, Theme } from '@material-ui/core';

export const usePageComingSoonStyles = makeStyles<Theme>(theme => ({
  root: {
    padding: '20vh 0',
    height: 'calc(100vh - 240px)',
    color: '#fff',
    backgroundColor: '#000',
  },

  title: {
    marginBottom: theme.spacing(2),
    fontSize: 60,

    [theme.breakpoints.up('md')]: {
      fontSize: 80,
    },
  },

  button: {
    minWidth: 180,
  },
}));
