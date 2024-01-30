
import { makeStyles, Theme } from '@material-ui/core';
export const useStepThreeStyles = makeStyles<Theme>(theme => ({
  stepThree: {
    marginTop: '32rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: '26.4rem',
    },
    '& .stepThree-wrap-title': {
      position: 'relative',
      padding: '0 5.2rem',
      '& img': {
        width: 'calc(100% - 10.4rem)',
        position: 'absolute',
        top: '-7rem',
        right: '5.2rem',
        [theme.breakpoints.down('sm')]: {
          top: '-14.5rem',
        },
      }
    },
    '& .stepThree-wrap-cardList': {
      marginTop: '15.4rem',
      padding: '0 15rem',
      gap: '2rem',
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        padding: '0 4rem',
        flexDirection: 'column',
      },
      '& .stepThree-wrap-cardList-left': {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
      },
      '& .stepThree-wrap-cardList-right': {
        flex: 1,
      },
      '& .left-desc': {
        width: '60rem',
        [theme.breakpoints.down('sm')]: {
          width: 'auto',
          fontSize: '3.2rem',
        },
      }
    }
  }
}));
