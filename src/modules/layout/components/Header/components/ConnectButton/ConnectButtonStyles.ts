import { fade, Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/styles';

export const styles = (theme: Theme): StyleRules => ({
  root: {
    display: 'flex',
    cursor: 'pointer',
    height: '100%',
    position: 'relative',
    alignItems: 'center',
  },
  languagePng: {
    width: '5rem',
    height: '5rem',
    marginRight: '5rem',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0rem',
    },
  },

  absolute: {
    display: 'flex',
    flexDirection: 'column',
  },
  language: {
    width: '100%',
    height: '4.4rem',
    fontSize: '1.4rem',
    padding: '0 2rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    color: '#010101',
    fontFamily: 'Pixeloid Sans',
    fontWeight: 400,
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    '&:hover': {
      background: fade('#010101', .03),
    },
  },
  dropdown: {
    width: '24rem',
    position: 'absolute',
    zIndex: theme.zIndex.tooltip,
    // top: '100%',//`calc(100% - ${theme.spacing(1)}px)`,
    top: `calc(100% + 0px)`,
    right: theme.spacing(3),

    pointerEvents: 'none',
    opacity: 0,
    transform: `translateY(${theme.spacing(-1)}px)`,
    transition: 'opacity 0.2s, transform 0.2s',
    // borderRadius: '12px',

    // backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3, 0, 2),
    // border: `3px solid #000000`,
    backgroundImage: 'url(http://localhost:3000/static/media/taskBorder.4a5fa556.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  },

  dropdownActive: {
    opacity: 1,
    transform: 'translateY(0)',
    pointerEvents: 'auto',
  },
  connect: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24.7rem',
    height: '7rem',
    backgroundColor: '#9A97E9',
    borderRadius: 50,
    color: 'white',
    fontSize: '4rem',
    fontFamily: 'DarkStar-Bold',
    fontWeight: 400,
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    '&:hover': {
      backgroundColor: '#9A97E9',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  buyButtonOrder: {
    margin:'0 10px',
    width: '46%',
    borderRadius: 0,
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 400,
    wordWrap: 'break-word',
    fontFamily: 'TTF-Pixer-Regular-ttf',
    '& span': {
      fontFamily: 'TTF-Pixer-Regular-ttf',
    }
  },
  backButtonOrder: {
    margin:'0 10px',
    width: '46%',
    borderRadius: 0,
    color: '#424242',
    fontSize: 16,
    fontWeight: 400,
    wordWrap: 'break-word',
    fontFamily: 'TTF-Pixer-Regular-ttf',
    '& span': {
      fontFamily: 'TTF-Pixer-Regular-ttf',
    }
  },
  diaTop:{
    height:'20rem'
  }
});
