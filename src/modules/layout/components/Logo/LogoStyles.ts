import {makeStyles, Theme} from '@material-ui/core';

export const useLogoStyles = makeStyles<Theme>(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: 'inherit',
    },
  },
  img: {
    display: 'block',
    // width: '30px', 
    height: '4.8rem',
    // marginRight: '32rem',
    // marginLeft: '16.9rem',
    // marginBottom:'5px',
    [theme.breakpoints.down('sm')]: {
      height: '8rem',
    },
  },
  ableDark: {},
  // [theme.palette.type === Themes.light ? 'ableLight' : 'ableDark']: {
  //   display: 'none',
  // },
}));
