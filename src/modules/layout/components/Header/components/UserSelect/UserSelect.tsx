import { useLanguageStyle } from 'modules/layout/components/Header/components/Language/useLanguageStyle';
import classNames from 'classnames';
import { Box } from '@material-ui/core';
import React from 'react';
import UserPng from 'assets/img/header/user.png';

import { Button } from 'modules/uiKit/Button';
import { NavLink } from 'react-router-dom';
import { useUserSelectStyle } from './useUserSelectStyle';

import { useWalletDropdown } from '../../../Wallet/useWalletDropdown';
import { setLoginType } from '../../../../../common/utils/localStorage';
import { t } from 'modules/i18n/utils/intl';
export const routers = [
  {
    link: '',
    class: 'position',
    title: '我的持仓',
  },
  {
    link: '',
    class: 'wallet',
    title: '钱包管理',
  },
];
export const UserSelect = () => {

  const classes = useLanguageStyle();
  const userClasses = useUserSelectStyle();

  const { handleDisconnect } = useWalletDropdown();
  return (
    <Box className={classes.addressBox}>
      <img className={classes.lang} src={UserPng} alt='' />
      <div className={classNames(classes.absoluteAb, 'absoluteAb')}>
        {
          routers.map(d => {
            return (
              <Button
                key={d.link}
                component={NavLink}
                variant='text'
                activeclassname={classNames(userClasses.activeLink, d.class)}
                className={classNames(userClasses.link, d.class)}
                to={d.link}
              >
                {d.title}
              </Button>
            );
          })
        }
        <Button
          variant='text'
          activeclassname={classNames(userClasses.activeLink)}
          className={classNames(userClasses.link)}
          onClick={() => {
            handleDisconnect();
            setLoginType('');
            // window.location.reload()
          }}
        >
          {t('login.logoutLogin')}
        </Button>
      </div>
    </Box>
  );
};
