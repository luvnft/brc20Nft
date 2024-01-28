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
    width: '26px',
    height: '18px',
    margin: 'auto',
  },
  drawerBody: {
    padding: '0 2rem',
    width: '100vw',
    height: '100%',
    backgroundColor: '#D2D1F2',
  },
  linkWrap: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  link: {
    color: '#010101',
    fontSize: '4.8rem',
    fontFamily: 'DarkStar-Bold',
    fontWeight: 400,
    wordWrap: 'break-word',
    textAlign: 'center',
    borderRadius: 0,
    '& span': {
      justifyContent: 'center',
    },
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
    // color: fade(theme.palette.common.white, .8),
  },
});
