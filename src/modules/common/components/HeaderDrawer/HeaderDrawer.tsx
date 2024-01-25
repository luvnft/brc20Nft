import React, { useState } from 'react';
import { styles } from './HeaderDrawerStyles';
import { Box, SwipeableDrawer, withStyles } from '@material-ui/core';
import DarkAssets from 'assets/img/header/dark-assets.png';
import LightAssets from 'assets/img/header/light-assets.png';
import { DraweCloseComp } from './components/DrawerClose';
import { CurrentTheme, Themes } from 'modules/themes/types';

type Anchor = 'right';
const HeaderDrawerComponents = ({ classes = {} }: { classes: any }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };
  return (
    <>
      <Box
        className={classes.root}
        onClick={toggleDrawer('right', true)}
        onKeyDown={toggleDrawer('right', false)}
      >
        <img src={CurrentTheme === Themes.dark ? DarkAssets : LightAssets} alt='' className={classes.userIcon}/>
      </Box>
      <SwipeableDrawer
        anchor={'right'}
        open={isOpen}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        <Box className={classes.drawerBody}>
          <DraweCloseComp toggleDrawer={toggleDrawer('right', false)} />


        </Box>
      </SwipeableDrawer>
    </>
  );
};

const HeaderDrawer = withStyles(styles)(HeaderDrawerComponents);
export { HeaderDrawer };
