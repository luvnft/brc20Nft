import {makeStyles, Theme} from '@material-ui/core';
export const useStepThreeCardStyles = makeStyles<Theme>(theme => ({
  root: {
    width: '100%',
    display: 'flex',
    gap: '2.7rem',
    padding: '4rem',
    overflow: 'hidden',
    position: 'relative',
    borderRadius: '4rem',
    boxShadow: '-0.4rem -0.6rem 0px rgba(0, 0, 0, 0.25) inset',
    '& .icon': {
      '& img': {
        height: '10rem'
      }
    },
    '& .indexText': {
      color: '#D1F154',
      fontSize: '20rem',
      fontFamily: 'Gilroy',
      fontWeight: '400',
      letterSpacing: '2rem',
      wordWrap: 'break-word',
      position: 'absolute',
      right: '5.8rem',
      bottom: '-12rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '20rem',
        bottom: '-11.8rem',
        right: '2.4rem',
      },
    },
  },
}));
