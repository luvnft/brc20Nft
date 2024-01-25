import { makeStyles, Theme } from '@material-ui/core';
export const useNoDataStyle = makeStyles<Theme>(theme => ({
  root: {
    width:'100%',
    height:'200px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  noData:{
    width:'80px',
    height:'80px'
  }
}));
