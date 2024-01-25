import { makeStyles, Theme } from '@material-ui/core';

export const useWrongNetworkContentStyles = makeStyles<Theme>(theme => ({
  root: {},
  caption: {
    fontSize: 40,
    marginBottom: theme.spacing(2),
    color: '#fff'
  },
  text: {
    fontSize: 16,
    margin: theme.spacing(2, 'auto', 3),
    maxWidth: 320,
    color: `${theme.palette.grey[500]}`
  },
  connectBtn: {
    fontSize: 16,
    minHeight: 60,
    background: 'linear-gradient(0deg, rgba(50, 94, 255, 0.8), rgba(50, 94, 255, 0.8)), rgba(255, 255, 255, 0.4);',
    color: `${theme.palette.grey[500]}`
  },
}));
