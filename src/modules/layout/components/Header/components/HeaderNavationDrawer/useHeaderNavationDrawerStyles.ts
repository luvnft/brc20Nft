import { Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/styles';

export const styles = (theme: Theme): StyleRules => ({
  root: {
    display: 'none',
    cursor: 'pointer',
    marginLeft: '10px',
    textAlign: 'center',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  userIcon: {
    height: '3.6rem',
    margin: 'auto',
  },
  drawerBody: {
    padding: '15.8rem 6rem 0 6rem',
    width: '100vw',
    height: '100%',
    boxSizing: 'border-box',
    background: 'rgba(3, 2, 19, 0.90)', backdropFilter: 'blur(20px)',
  },
  drawerBodyTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  linkWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '6rem',
    paddingTop: '30rem',
  },
  link: {
    color: 'white',
    fontSize: '3.6rem',
    fontFamily: 'Gravity',
    fontWeight: 400,
    wordWrap: 'break-word',
    textAlign: 'center',
    borderRadius: 0,
    '& span': {
      justifyContent: 'center',
    },
  },
  linkText: {
    color: 'white',
    fontSize: '3.6rem',
    fontFamily: 'Gravity',
    fontWeight: 400,
  },
  childrenLink: {
    color: '#413E7B',
    fontSize: '2.8rem',
    fontFamily: 'Pixeloid Sans',
    fontWeight: 400,
    textTransform: 'capitalize',
    wordWrap: 'break-word',
  },
  linkFlex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(65, 62, 123, .3)',
    padding: '2rem 0',
  },
  activeLink: {
    fontSize: '6.4rem',
    fontFamily: 'Gravity',
    fontWeight: 700,
  },
  applink: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '41rem'
  }
});
