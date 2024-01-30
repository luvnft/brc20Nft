import { makeStyles, Theme } from '@material-ui/core';
export const useHeaderStyles = makeStyles<Theme>(theme => ({
  root: {
    width: '100%',
    height: '7rem',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 101,
    padding: '0 19rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 1s',
    backgroundColor: '#1A1B31',
    '&.bg': {
      backgroundColor: '#1A1B31',
      [theme.breakpoints.down('sm')]: {
        backgroundColor: '#121323',
      },
    },
    [theme.breakpoints.down('sm')]: {
      height: '12rem',
      // padding: '12.8rem 6rem 12.6rem 6rem',
      padding: '0 6rem',
      backgroundColor: '#121323',
    },
  },
  left: {
    display: 'flex',
    alignItems: 'center',
    '& .leftLogo': {
      marginRight: '32rem',
    },
    '& .leftButton': {
      display: 'flex',
      gap: '4rem',
      '& a': {
        padding: 0,
      }
    }
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    '& .link': {
      padding: '0 1rem',
    }
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    // width: '226px',
    justifyContent: 'flex-end',
    '& .connectBtn': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '16rem',
      height: '4.8rem',
      borderRadius: 50,
      color: 'white',
      fontSize: '1.6rem',
      fontFamily: 'Gravity',
      fontWeight: 400,
      textTransform: 'uppercase',
      wordWrap: 'break-word',
      border: '1px white solid',
      backgroundColor: 'rgba(255, 255, 255, 0)',
      '&:hover': {
        backgroundColor: '#9A97E9',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  },
  linkText: {
    color: 'white',
    fontSize: '1.4rem',
    fontFamily: '    ',
    fontWeight: 400,
    textTransform: 'uppercase',
    wordWrap: 'break-word',
  },
  
  link: {
    color: '#222',
    fontStyle: 'normal',
    fontWeight: 400,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      // max-width=750
      display: 'none',
    },
  },

  activeLink: {

  },
  button: {
    width: '22rem',
    height: '5.4rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#010101',
    fontSize: '1.8rem',
    fontFamily: 'Pixeloid Sans',
    fontWeight: 400,
    wordWrap: 'break-word',
    position: 'relative',
    cursor: 'pointer',
  },
}));
