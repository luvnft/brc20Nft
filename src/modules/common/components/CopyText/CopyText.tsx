import {useCopyTextStyle} from './useCopyTextStyle';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Box, Tooltip } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { t } from 'modules/i18n/utils/intl';
// import { truncateWalletAddr } from 'modules/common/utils/truncateWalletAddr';
// import CopyPng from 'assets/img/public/copy.png';

interface CopyTextProps{
  text:string|any;
  hideText?:boolean;
  children?: any;
}
export const CopyText=({text,hideText=false,children}:CopyTextProps)=>{

  const classes=useCopyTextStyle();
  const [isCopy, setCopy] = useState<boolean>(false);

  useEffect(() => {
    if (isCopy) {
      setTimeout(() => {
        setCopy(false);
        (document.activeElement as any)?.blur();
      }, 1000);
    }
  }, [isCopy]);
  const copyClick = () => {
    setCopy(true);
  };
  return (
    <CopyToClipboard text={String(text)} onCopy={copyClick}>
      <Tooltip arrow placement='bottom'
               classes={
                 {
                   tooltip: classes.tooltipAuto,
                   arrow: classes.arrow,
                 }
               }
               title={isCopy ? t('common.copied') : t('common.copy-to-clipboard')}
      >
        <Box className={classes.walletAddress}>
          {children}
          {/*{*/}
          {/*  !hideText && <>*/}
          {/*    {text && text.length>12 && truncateWalletAddr(text)}*/}
          {/*    {text && text.length<12 && text}*/}
          {/*  </>*/}
          {/*}*/}

          {/*<img className={classes.copy} src={CopyPng} alt='' />*/}
        </Box>

      </Tooltip>
    </CopyToClipboard>
  )
}
