import { makeStyles, Theme } from '@material-ui/core';


export const useVerifyStyle = makeStyles<Theme>((theme: Theme) => ({
  root: {
    margin: '0 20px',
    display:'block',
    width:'26px',
    height:'26px',
    [theme.breakpoints.down('md')]: {
      margin: '0 10px',
      display:'block',
      width:'18px',
      height:'18px',
    },
  },
}));

