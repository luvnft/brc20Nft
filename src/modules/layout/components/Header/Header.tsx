import React from 'react';
import { Box } from '@material-ui/core';
import { useHeaderStyles } from './HeaderStyles';
import classNames from 'classnames';
import { Logo } from '../Logo';
import { Applink } from '../AppLink';
import { Button } from '../../../uiKit/Button';
import { NavLink } from 'react-router-dom';
// import { useIsSMDown } from '../../../themes/useTheme';
// import { HeaderNavationDrawer } from './components/HeaderNavationDrawer';
// import {ConnectButton} from './components/ConnectButton';
import { useAccount } from '../../../account/hooks/useAccount';


export const routers = [
  {
    link: '/home',
    title: 'HOME',
    component: NavLink
  },
  {
    link: '/evm',
    title: 'EVM',
    component: NavLink
  },
  {
    link: '/privacy',
    title: 'PRIVACY',
    component: NavLink
  },
];

export const otherRouter = [
  {
    link: '/home',
    title: 'COMPLIANCE & SECURUTY',
    component: 'a'
  },
  {
    link: '/evm',
    title: 'X TERMINAL',
    component: 'a'
  },
];

interface HeaderProps {
  scrollShow: boolean
}

export const Header = ({ scrollShow }: HeaderProps) => {
  const classes = useHeaderStyles();
  // const mobile = useIsSMDown();
  const {handleConnect}=useAccount(); // ETH
  return (
    <header className={classNames(classes.root, scrollShow && 'bg')}>
      <Box className={classNames(classes.left)}>
        <Logo />
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

      <Box className={classNames(classes.right)}>
        {
          otherRouter.map(d => {
            return (
              <Button
                key={d.link}
                component={d.component}
                variant='text'
                className={classNames(classes.link, 'link')}
                activeclassname={classNames(classes.activeLink)}
                to={d.link}
              >
                <span className={classNames(classes.linkText)}>{d.title}</span>
              </Button>
            );
          })
        }

      </Box>
      <Applink/>
      <Box className={classNames(classes.right)}>
        {/* <ConnectButton /> */}
        
        {/* ETH */}
        <Button
          type='button'
          onClick={handleConnect}
          className={classNames(classes.backButtonOrder, 'back')}
          loading={false}>
          Connect
        </Button>
        
        {/* <HeaderNavationDrawer /> */}
      </Box>

    </header>
  );
};
