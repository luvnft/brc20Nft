import { makeStyles, Theme } from '@material-ui/core';

export const useConnectWalletStyles = makeStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    minHeight: 300,
    // height: '100vh',
    maxHeight: '100%',
    padding: theme.spacing(5, 0),
    textAlign: 'center',
    backgroundColor: `${theme.palette.background.default}`,
  },
  caption: {
    fontSize: 40,
    marginBottom: theme.spacing(2),
    color: `#EAEAEA`
  },
  text: {
    fontSize: 16,
    margin: theme.spacing(2, 'auto', 3),
    maxWidth: 320,
    color: `#EAEAEA`
  },
  connectBtn: {
    fontSize: 16,
    // background: `${theme.palette.grey[300]}`,
    height: '48px',
    lineHeight: '48px',
    color: `#EAEAEA`
  },
}));
