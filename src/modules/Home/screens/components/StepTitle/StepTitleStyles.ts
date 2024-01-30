import {makeStyles, Theme} from '@material-ui/core';
import stepPgPng from 'assets/img/public/step-bg.png';
export const useStepTitleStyles = makeStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .stepPg': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: `url(${stepPgPng})`,
      backgroundSize: '100% 100%',
      height: '6.8rem',
      width: '6.8rem',
      '& p': {
        color: 'white',
        fontSize: '4rem',
        fontFamily: 'eryaxindahei',
        fontWeight: '400',
        wordWrap: 'break-word',
        
      },
    },
  },
  stepDesc: {
    marginTop: '1rem',
    color: 'white',
    fontSize: '8rem',
    fontFamily: 'eryaxindahei',
    fontWeight: 400,
    wordWrap: 'break-word',
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: '5.2rem',
    },
  },
}));
