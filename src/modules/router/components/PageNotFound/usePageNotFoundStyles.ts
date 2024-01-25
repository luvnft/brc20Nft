import { makeStyles, Theme } from '@material-ui/core';

export const usePageNotFoundStyles = makeStyles<Theme>(theme => ({
  root: {
    padding: '20vh 0',
    height: 'calc(100vh - 240px)',
  },

  title: {
    marginBottom: theme.spacing(6),
    fontSize: 60,

    [theme.breakpoints.up('md')]: {
      fontSize: 80,
    },
  },

  button: {
    minWidth: 180,
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.grey[50]}`,
    color:`${theme.palette.common.white}`,
    '&:hover': {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.palette.grey[50]}`,
      color:`${theme.palette.common.white}`,
    },
    '& span': {
      color:`${theme.palette.common.white}`,
    }
  },
}));
