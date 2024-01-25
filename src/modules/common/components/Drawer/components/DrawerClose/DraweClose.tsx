import React from 'react';

import { Box } from '@material-ui/core';
import { useDrawerCloseStyle } from './useDrawerCloseStyle';
import { withStyles } from '@material-ui/core';
import closePng from 'assets/img/public/close.png';

interface DrawerCloseInterface {
  classes: any;
  toggleDrawer: (e: any) => void
}

const DrawerClose = (
  {
    classes = {},
    toggleDrawer,
  }: DrawerCloseInterface) => {

  return (
    <Box className={classes.headerClose} onClick={toggleDrawer}>
      <img src={closePng} className={classes.closeImg} alt=''/>
    </Box>
  );
};
export const DrawerCloseComp = withStyles(useDrawerCloseStyle)(DrawerClose);
