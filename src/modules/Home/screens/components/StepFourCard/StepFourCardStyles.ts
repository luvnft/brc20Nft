import {makeStyles, Theme} from '@material-ui/core';
export const useStepFourCardStyles = makeStyles<Theme>(theme => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '4.2rem',
    background: '#1A1B31',
    borderRadius: '4rem',
    padding: '4.8rem 5rem',
    [theme.breakpoints.down('sm')]: {
      padding: '5rem',
    },
    '& .img': {
      '& img': {
        height: '30.8rem'
      }
    },
    '& .desc': {
      color: 'white',
      fontSize: '2.4rem',
      fontFamily: 'Gravity',
      fontWeight: '700',
      wordWrap: 'break-word',
      [theme.breakpoints.down('sm')]: {
        fontSize: '3.2rem',
      },
    },
  },
}));
