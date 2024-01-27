import { makeStyles, Theme } from '@material-ui/core';
export const useHeaderStyles = makeStyles<Theme>(theme => ({
  root: {
    width: '100%',
    height: '7rem',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 101,
    padding: '0 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: 'all 1s',
    '&.bg': {
      backgroundColor: 'red',
    },
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    // width: '226px',
    justifyContent: 'flex-end',
  },
  linkText: {
    fontFamily: 'DarkStar-Bold !important',
  },
  link: {
    color: '#222',
    fontSize: '2rem !important',
    fontStyle: 'normal',
    fontWeight: 400,
    display: 'flex',
    alignItems: 'center',
    padding: '0 0.8rem',
    position: 'relative',
    '&.css':{

    },
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
