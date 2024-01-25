import React from 'react';
import DarkCloseImg from 'assets/img/header/darkClose.png';
import { Box } from '@material-ui/core';
import { styles } from './useDraweCloseStyle';
import { withStyles } from '@material-ui/core';


interface DraweCloseInterface {
  classes: any;
  toggleDrawer: (e: any) => void
}

const DraweClose = (
  {
    classes = {},
    toggleDrawer,
  }: DraweCloseInterface) => {

  return (
    <Box className={classes.headerClose}>
      <img src={DarkCloseImg} onClick={toggleDrawer} alt=''
           className={classes.closeImg} />
    </Box>
  );
};
export const DraweCloseComp = withStyles(styles)(DraweClose);
