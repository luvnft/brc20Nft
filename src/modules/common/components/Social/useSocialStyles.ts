import { makeStyles, Theme } from '@material-ui/core';

export const useSocialStyles = makeStyles<Theme>(theme => ({
  list: {
    display: 'flex',
    margin: 0,
    padding: theme.spacing(1, 2),
    listStyle: 'none',
    height: '28px',
    borderRadius: '4px'
  },

  item: {
    padding: theme.spacing(0, 1),
    display: 'flex',
    alignItems: 'center',
  },

  icon: {
    padding: 4
  },
}));
