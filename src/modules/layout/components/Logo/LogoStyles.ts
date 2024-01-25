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
    height: '30px',
    marginRight: '30px',
    // marginBottom:'5px',
    [theme.breakpoints.down('md')]: {
      marginRight: '15px',
    }
  },
  ableDark: {},
  // [theme.palette.type === Themes.light ? 'ableLight' : 'ableDark']: {
  //   display: 'none',
  // },
}));
