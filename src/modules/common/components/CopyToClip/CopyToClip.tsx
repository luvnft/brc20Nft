import { IconButton, Tooltip, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { DoneIcon } from 'modules/common/components/Icons/DoneIcon';
import { truncateWalletAddr } from 'modules/common/utils/truncateWalletAddr';
import { t } from 'modules/i18n/utils/intl';
import React, { useEffect, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useCopyToClipStyles } from './useCopyToClipStyles';
import { CurrentTheme, Themes } from 'modules/themes/types';
import DarkCopyImg from 'assets/img/copy/dark-copy.png';
import LightCopyImg from 'assets/img/copy/light-copy.png';

interface ICopyToClipProps {
  address: string;
  hideTextFlag?: boolean;
  className?: string;
}

export const CopyToClip = ({
                             address,
                             hideTextFlag,
                             className,
                           }: ICopyToClipProps) => {
  const classes = useCopyToClipStyles();

  const [isCopy, setCopy] = useState<boolean>(false);

  useEffect(() => {
    if (isCopy) {
      setTimeout(() => {
        setCopy(false);
        (document.activeElement as any)?.blur();
      }, 1000);
    }
  }, [isCopy]);

  return (
    <div className={classNames(classes.root, className)}>
      <Typography variant='body1' className={classes.addressText}>
        {!hideTextFlag && truncateWalletAddr(address)}

        <CopyToClipboard text={address} onCopy={() => setCopy(true)}>
          <Tooltip
            classes={
              {
                tooltip: classes.tooltip,
                arrow: classes.arrow,
              }
            }
            title={isCopy ? t('common.copied') : t('common.copy-to-clipboard')}
            arrow
          >
            <IconButton size='small' className={classes.clipboardBtn}>
              {isCopy ? (
                <DoneIcon
                  className={classNames(
                    classes.clipboardBtnIcon,
                    classes.clipboardBtnIconDone,
                  )}
                />
              ) : (
                <img src={CurrentTheme === Themes.dark ? DarkCopyImg : LightCopyImg} alt=''
                     className={classes.clipboardBtnIcon} />
              )}
            </IconButton>
          </Tooltip>
        </CopyToClipboard>
      </Typography>
    </div>
  );
};
