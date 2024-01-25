import { Box, SwipeableDrawer } from '@material-ui/core';
import { DrawerCloseComp } from './components/DrawerClose';
import { useDrawerStyle } from './useDrawerStyle';
import React, { MutableRefObject, ReactNode, useImperativeHandle, useState } from 'react';

export type event = {
  onOpen: () => void,
  onClose: () => void
};
type Anchor = 'bottom';

interface PropsType {
  event?: MutableRefObject<event>,
  children: ReactNode,
  cancel?:()=>void
}

export const Drawer = (
  {
    event,
    children,
    cancel
  }: PropsType,
) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useDrawerStyle();
  useImperativeHandle(event, () => ({
    onOpen: () => {
      setIsOpen(true);
    },
    onClose:()=>{
      setIsOpen(false);
    }
  }));
  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    !open && cancel && cancel()
    setIsOpen(open);
  };
  return (
    <SwipeableDrawer
      anchor={'bottom'}
      open={isOpen}
      onClose={toggleDrawer('bottom', false)}
      onOpen={toggleDrawer('bottom', true)}
      classes={{
        paper: classes.paper,
      }
      }
    >
      <Box className={classes.root}>
        <DrawerCloseComp toggleDrawer={toggleDrawer('bottom', false)} />
        {children}
      </Box>
    </SwipeableDrawer>
  );
};
