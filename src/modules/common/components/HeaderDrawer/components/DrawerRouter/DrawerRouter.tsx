import React  from 'react';
import { Box } from '@material-ui/core';
import { useDrawerRouterStyle } from './useDrawerRouterStyle';
interface DrawerRouterCompInterface {
  toggleDrawer?: (e: any) => void;
}
export const DrawerRouterComp = (
  {toggleDrawer}:DrawerRouterCompInterface
) => {



  const classes = useDrawerRouterStyle();
  return (
    <Box className={classes.root}>

    </Box>
  );
};
