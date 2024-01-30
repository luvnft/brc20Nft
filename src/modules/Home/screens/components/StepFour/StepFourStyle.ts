
import { makeStyles, Theme } from '@material-ui/core';
export const useStepFourStyles = makeStyles<Theme>(theme => ({
  stepFour: {
    marginTop: '25rem',
    '& .stepFour-wrap-title': {
      position: 'relative',
      padding: '0 22rem',
      [theme.breakpoints.down('sm')]: {
        padding: '0 4rem',
      },
      '& img': {
        width: 'calc(100% - 44rem)',
        position: 'absolute',
        top: '4rem',
        right: '22rem',
        [theme.breakpoints.down('sm')]: {
          width: 'calc(100% - 7.8rem)',
          right: '4.6rem',
          top: '-2.5rem',
        },
      }
    },
    '& .stepFour-wrap-cardList': {
      marginTop: '9rem',
      padding: '0 15rem',
      gap: '2rem',
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        gap: '4rem',
        padding: '0 4rem',
        flexDirection: 'column',
        marginTop: '6rem',
      },
    },
  }
}));
