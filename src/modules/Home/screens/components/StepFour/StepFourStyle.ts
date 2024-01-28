
import { makeStyles, Theme } from '@material-ui/core';
export const useStepFourStyles = makeStyles<Theme>(theme => ({
  stepFour: {
    marginTop: '25rem',
    '& .stepFour-wrap-title': {
      position: 'relative',
      padding: '0 22rem',
      '& img': {
        width: 'calc(100% - 44rem)',
        position: 'absolute',
        top: '4rem',
        right: '22rem',
      }
    },
    '& .stepFour-wrap-cardList': {
      marginTop: '9rem',
      padding: '0 15rem',
      gap: '2rem',
      display: 'flex',
    },
  }
}));
