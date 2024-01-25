import { useLanguageStyle } from './useLanguageStyle';
import LanguagePng from 'assets/img/header/language.png';
import classNames from 'classnames';
import { Box } from '@material-ui/core';
import React from 'react';
import { useLocaleMemo } from 'modules/i18n/utils/useLocaleMemo';
import { useLocale } from 'modules/i18n/utils/useLocale';
import { useAppDispatch } from 'store/useAppDispatch';
import { t } from 'modules/i18n/utils/intl';
import { Locale } from 'modules/i18n/types/locale';
import { setLocale } from 'modules/i18n/i18nSlice';
export const Language = () => {

  const classes = useLanguageStyle();
  const dispatch = useAppDispatch();
  const { locale } = useLocale();
  const localeOptions = useLocaleMemo(
    () => [
      {
        value: Locale.en,
        label: t('language.en-US'),
      },
      {
        value: Locale.ja,
        label: t('language.ja-JP'),
      },
      {
        value: Locale.zh,
        label: t('language.zh-CN'),
      },
    ],
    [],
  );
  const onChange = (value: string) => {
    dispatch(setLocale(value as Locale));
  };
  return (
    <Box className={classes.addressBox}>
      <img className={classes.lang} src={LanguagePng} alt='' />

      <Box className={classNames(classes.absoluteAb, 'absoluteAb')}>

        {
          localeOptions.map(d => {
            return (
              <Box onClick={() => onChange(d.value)} key={d.value}
                   className={classNames(classes.item, locale === d.value ? classes.active : '')}
              >{d.label}
              </Box>
            );
          })
        }
      </Box>
    </Box>
  );
};
