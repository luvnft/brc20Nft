
import { makeStyles, Theme } from '@material-ui/core';
export const useStepThreeStyles = makeStyles<Theme>(theme => ({
  stepThree: {
    marginTop: '32rem',
      '& .stepThree-wrap-title': {
        position: 'relative',
        padding: '0 22rem',
        '& img': {
          width: 'calc(100% - 44rem)',
          position: 'absolute',
          top: '-7rem',
          right: '22rem',
        }
      },
      '& .stepThree-wrap-cardList': {
        marginTop: '15.4rem',
        padding: '0 15rem',
        gap: '2rem',
        display: 'flex',
        '& .stepThree-wrap-cardList-left': {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        },
        '& .stepThree-wrap-cardList-right': {
          width: '60rem',
        },
        '& .left-desc': {
          width: '60rem'
        }
      }
    }
}));
