import React, { useEffect, useState } from 'react';
import { styles } from './useHeaderNavationDrawerStyles';
import { Box, SwipeableDrawer, withStyles } from '@material-ui/core';
import { DraweCloseComp } from 'modules/common/components/HeaderDrawer/components/DrawerClose';
import { Logo } from '../../../Logo';
import { Applink } from '../../../AppLink';
// import { Button } from 'modules/uiKit/Button';
// import { NavLink } from 'react-router-dom';
import DrawerImg from 'assets/img/header/drawOpen.png';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Button } from '../../../../../uiKit/Button';
import { NavLink } from 'react-router-dom';

type Anchor = 'right';
export const routers = [
  {
    link: '#/home',
    title: 'HOME',
    component: NavLink
  },
  {
    link: '#/evm',
    title: 'EVM',
    component: NavLink
  },
  {
    link: '#/privacy',
    title: 'PRIVACY',
    component: NavLink
  },
  {
    link: '#/home',
    title: 'COMPLIANCE & SECURUTY',
    component: NavLink
  },
  {
    link: '#/evm',
    title: 'X TERMINAL',
    component: NavLink
  },
];
const HeaderDrawerNavComponents = ({ classes = {} }: { classes: any }) => {
  const { location: { pathname } } = useSelector((store: RootState) => store.router);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
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
        <img src={DrawerImg} alt='' className={classes.userIcon} />
      </Box>
      <SwipeableDrawer
        anchor={'right'}
        open={isOpen}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        <Box className={classes.drawerBody}>
          <Box className={classes.drawerBodyTop}>
            <Logo/>
            <DraweCloseComp toggleDrawer={toggleDrawer('right', false)} />
          </Box>
          <Box className={classes.linkWrap}>
            {
              routers.map(d => {
                return (
                  <Button
                    key={d.link}
                    component={d.component}
                    variant='text'
                    className={classNames(classes.link)}
                    activeclassname={classNames(classes.activeLink)}
                    to={d.link}
                  >
                    <span className={classNames(classes.linkText)}>{d.title}</span>
                  </Button>
                );
              })
            }
          </Box>
          <Box className={classes.applink}>
            <Applink/>
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

const HeaderNavationDrawer = withStyles(styles)(HeaderDrawerNavComponents);
export { HeaderNavationDrawer };
