import React from 'react';
import closeWhite from 'assets/img/header/closeWhite.png';
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
      <img src={closeWhite} onClick={toggleDrawer} alt=''
           className={classes.closeImg} />
    </Box>
  );
};
export const DraweCloseComp = withStyles(styles)(DraweClose);
