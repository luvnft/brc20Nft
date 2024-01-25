import React  from 'react';
// import { Locale } from 'modules/i18n/types/locale';
// import { setLocale } from 'modules/i18n/i18nSlice';
// import { useLocaleMemo } from 'modules/i18n/utils/useLocaleMemo';
// import { useLocale } from 'modules/i18n/utils/useLocale';
// import { t } from 'modules/i18n/utils/intl';
// import { Box } from '@material-ui/core';
// import { useAppDispatch } from 'store/useAppDispatch';
// import DarkLangImg from 'assets/img/header/dark-lang.png';
// import LightLangImg from 'assets/img/header/light-lang.png';
// import { CurrentTheme, Themes } from 'modules/themes/types';
// import classNames from 'classnames';
// import { useWalletDropdown } from '../../../layout/components/Wallet/useWalletDropdown';
// import { FocusOn } from 'react-focus-on';
import {withStyles} from '@material-ui/core';
import {styles} from './LocaleSwitcherStyles';



const LocaleSwitcherComponent = (
  { classes = {} }: { classes: any },
) => {
  // const dispatch = useAppDispatch();
  // const localeOptions = useLocaleMemo(
  //   () => [
  //     {
  //       value: Locale.en,
  //       label: t('language.en-US'),
  //     },
  //     {
  //       value: Locale.ja,
  //       label: t('language.ja-JP'),
  //     },
  //     {
  //       value: Locale.zh,
  //       label: t('language.zh-CN'),
  //     },
  //   ],
  //   [],
  // );


  // const { locale } = useLocale();
  // const controlRef = useRef<HTMLButtonElement>(null);
  // const {
  //   isOpened,
  //   handleClose,
  //   handleOpen,
  // } = useWalletDropdown();

  // const onChange = (value: string) => {
  //   dispatch(setLocale(value as Locale));
  // };

  return (
    <>
    </>
    // <>
    //   <Box onClick={handleOpen} className={classes.root}>
    //     <img src={CurrentTheme === Themes.dark ? DarkLangImg : LightLangImg} alt='' className={classes.userIcon} />
    //   </Box>
    //   <FocusOn
    //     enabled={isOpened}
    //     onEscapeKey={handleClose}
    //     onClickOutside={handleClose}
    //     focusLock={true}
    //     scrollLock={false}
    //     shards={[controlRef]}
    //   >
    //     <div
    //       className={classNames(
    //         classes.dropdown,
    //         isOpened && classes.dropdownActive,
    //       )}
    //     >
    //       <div className={classes.absolute}>
    //         {
    //           localeOptions.map(d => {
    //             return (
    //               <Box onClick={() => onChange(d.value)} key={d.value}
    //                 className={classNames(classes.language, locale === d.value ? classes.active : '')}
    //               >{d.label}
    //               </Box>
    //             );
    //           })
    //         }
    //       </div>
    //     </div>
    //   </FocusOn>
    // </>
  );
};

const LocaleSwitcher = withStyles(styles)(LocaleSwitcherComponent);

export { LocaleSwitcher };
