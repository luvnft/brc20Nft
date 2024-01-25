import React, { useMemo, useRef } from 'react';
import { styles } from './AvatarDropStyles';
import { t } from 'modules/i18n/utils/intl';
import { Box, withStyles } from '@material-ui/core';

import classNames from 'classnames';
// import { Button } from '../../../uiKit/Button';
import { useWalletDropdown } from '../../../layout/components/Wallet/useWalletDropdown';
import { FocusOn } from 'react-focus-on';
// import { NavLink } from 'react-router-dom';
// import { ProfileRoutesConfig } from '../../../Profile/ProfileRoutes';
import { CurrentTheme, Themes } from 'modules/themes/types';
import DarkUserIcon from 'assets/img/header/dark-info.png';
// import DarkFavorite from 'assets/img/header/dark-favorite.png';
// import DarkSetting from 'assets/img/header/dark-setting.png';
import LightUserIcon from 'assets/img/header/light-info.png';
// import LightFavorite from 'assets/img/header/light-favorite.png';
// import LightSetting from 'assets/img/header/light-setting.png';



const AvatarDropDownComponents = (
  { classes = {} }: { classes: any },
) => {
  const list = useMemo(
    () => [
      // {
      //   path: ProfileRoutesConfig.UserProfile.path,
      //   title: t('header.profile'),
      //   darkImg: DarkUserIcon,
      //   lightImg: LightUserIcon,
      // },
      // {
      //   path: ProfileRoutesConfig.UserProfile.generatePath('favorited'),
      //   title: t('header.favorite'),
      //   darkImg: DarkFavorite,
      //   lightImg: LightFavorite,
      // },
      // {
      //   path: ProfileRoutesConfig.UserEdit.path,
      //   title: t('header.setting'),
      //   darkImg: DarkSetting,
      //   lightImg: LightSetting,
      // },
    ],
    [],
  );
  const controlRef = useRef<HTMLButtonElement>(null);
  const {
    isOpened,
    handleDisconnect,
    handleClose,
    handleOpen,
  } = useWalletDropdown();

  // onClick={() => {
  //   history.push(ProfileRoutesConfig.UserProfile.generatePath('favorited'))
  // }}

  return (
    <>
      <Box
        className={classes.root}
        onClick={handleOpen}
      >
        <img src={CurrentTheme === Themes.dark ? DarkUserIcon : LightUserIcon} alt='' className={classes.userIcon} />
      </Box>
      <FocusOn
        enabled={isOpened}
        onEscapeKey={handleClose}
        onClickOutside={handleClose}
        focusLock={true}
        scrollLock={false}
        shards={[controlRef]}
      >
        <div
          className={classNames(
            classes.dropdown,
            isOpened && classes.dropdownActive,
          )}
        >
          <div className={classes.absolute}>
            {/*{*/}
            {/*  list.map(d => {*/}
            {/*    return (*/}
            {/*      <Button*/}
            {/*        key={d.path}*/}
            {/*        component={NavLink}*/}
            {/*        variant='text'*/}
            {/*        activeClassName={classes.activeLink}*/}
            {/*        className={classes.link}*/}
            {/*        to={d.path}*/}
            {/*        onClick={handleClose}*/}
            {/*      >*/}
            {/*        <Box className={classes.ingWrap}>*/}
            {/*          <img className={classes.profileImg} src={CurrentTheme === Themes.dark ? d.darkImg : d.lightImg}*/}
            {/*            alt='' />*/}
            {/*        </Box>*/}
            {/*        {d.title}*/}
            {/*      </Button>*/}
            {/*    );*/}
            {/*  })*/}
            {/*}*/}
            <Box
              className={classes.disconnect}
              onClick={handleDisconnect}
            >
              <Box className={classes.ingWrap}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 0V24H0V17.3502H2.58462V21.4117H21.4154V2.58831H2.58462V6.25846H0V0H24ZM9.456 8.03077L16.0191 11.5329V13.0837H0V10.4917H9.456V8.03262V8.03077Z"
                    fill={CurrentTheme === Themes.dark ? '#2EF2F1' : '#EA3375'} />
                </svg>
                {/*<img onClick={handleDisconnect} className={classes.profileImg}*/}
                {/*     src={CurrentTheme === Themes.dark ? LogoutSvg : LogOutImg} alt='' />*/}
              </Box>

              {t('header.disconnect')}
            </Box>
          </div>
        </div>
      </FocusOn>
    </>
  );
};

const AvatarDropDown = withStyles(styles)(AvatarDropDownComponents);

export { AvatarDropDown };
