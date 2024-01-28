import {makeStyles, Theme} from '@material-ui/core';
export const useStepTwoCardStyles = makeStyles<Theme>(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& .title': {
      color: '#9F77F9',
      fontSize: '2.4rem',
      fontFamily: 'Gravity',
      fontWeight: '700',
      textTransform: 'uppercase',
      wordWrap: 'break-word',
      marginBottom: '1rem',
    },
    '& .desc': {
      color: 'white',
      fontSize: '3.2rem',
      fontFamily: 'Gravity',
      fontWeight: '700',
      wordWrap: 'break-word',
      marginBottom: '2.4rem',
    },
    '& .content': {
      color: 'rgba(255,255,255,0.5)',
      fontSize: '2.4rem',
      fontFamily: 'Gravity',
      fontWeight: '700',
      lineHeight: '3.2rem',
      wordWrap: 'break-word'
    },
  },
}));
