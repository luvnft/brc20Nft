import { makeStyles, Theme } from '@material-ui/core';

export const useBackStyles = makeStyles<Theme>(theme => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: theme.palette.text.secondary,
    transition: 'color 0.2s',
    backgroundColor: '#ddd',
    '&:hover': {
      color: theme.palette.text.primary,
    },
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
  icon: {
    padding: 0,
    width: 32,
    height: 32,
    margin: '0 auto',
    color: theme.palette.text.secondary,
    transition: 'color 0.2s',
    '$root:hover &': {
      color: theme.palette.text.primary,
    },
  },
}));
