import React from 'react';
import { Box } from '@material-ui/core';
import { useHeaderStyles } from './HeaderStyles';
import classNames from 'classnames';
import { Logo } from '../Logo';
import { Button } from '../../../uiKit/Button';
import { NavLink } from 'react-router-dom';
import { useIsMDDown } from '../../../themes/useTheme';
import { HeaderNavationDrawer } from './components/HeaderNavationDrawer';
import {ConnectButton} from './components/ConnectButton';
import { useAccount } from '../../../account/hooks/useAccount';


export const routers = [
  {
    link: '1',
    title: 'Home',
    children: [],
  },
  {
    link: '2',
    title: 'Home1',
    children: [],
  },
  {
    link: '3',
    title: 'Home2',
  },
];

interface HeaderProps {
  scrollShow: boolean
}

export const Header = ({ scrollShow }: HeaderProps) => {
  const classes = useHeaderStyles();
  const mobile = useIsMDDown();
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
                component={NavLink}
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
        <ConnectButton />
        <Button
          type='button'
          onClick={handleConnect}
          className={classNames(classes.backButtonOrder, 'back')}
          loading={false}>
          ETHConnect
        </Button>
        {
          !mobile && <Box
            className={classNames(classes.button, 'app')}
          >
            Launch dApp
          </Box>
        }
        <HeaderNavationDrawer />
      </Box>

    </header>
  );
};
