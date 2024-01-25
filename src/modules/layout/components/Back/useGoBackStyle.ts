import { makeStyles, Theme } from '@material-ui/core';

export const useGoBackStyle = makeStyles<Theme>(theme => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    color: theme.palette.text.secondary,
    transition: 'color 0.2s',
    '&:hover': {
      color: theme.palette.text.primary,
    },
    width: '32px',
    height: '32px',
  },
  icon: {
    padding: 0,
    width: 16,
    height: 16,
    margin: '0 auto',
    color: theme.palette.text.secondary,
    transition: 'color 0.2s',
    '$root:hover &': {
      color: theme.palette.text.primary,
    },
  },
}));
