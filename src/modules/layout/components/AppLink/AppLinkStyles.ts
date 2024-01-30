import {makeStyles, Theme} from '@material-ui/core';

export const useAppLinkStyles = makeStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
    '& .img': {
      height: '3.2rem',
      [theme.breakpoints.down('sm')]: {
        height: '6.4rem'
      },
    }
  },
}));
