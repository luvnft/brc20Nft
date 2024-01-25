import React, { ReactNode } from 'react';
import { Box, Dialog } from '@material-ui/core';
import { useSelectChainStyled } from './useSelectChainStyled';
// import { ModalCloseBtn } from 'modules/uiKit/ModalCloseBtn';
import { useAccount } from 'modules/account/hooks/useAccount';
import { t } from 'modules/i18n/utils/intl';
import { ChainType, getChainConfig } from 'modules/account/hooks/chainConfig';
import { BlockchainNetworkId } from 'modules/common/conts';
// import DialogTitle from '@material-ui/core/DialogTitle';
import classNames from 'classnames';

import ClosePng from '../../../../../../assets/img/header/close.png';
// import { Form } from 'react-final-form';

const baseEnv = process.env.REACT_APP_BASE_ENV;
export const chainList: ChainType[] = baseEnv === 'DEV' ? [BlockchainNetworkId.goerli] : [BlockchainNetworkId.mainnet];

export interface IAddEthereumChain {
  chainId: string; // A 0x-prefixed hexadecimal string
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string; // 2-6 characters long
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls?: String[];
  iconUrls?: string[]; // Currently ignored.
}

export const SelectChainDialog = ({
                                    isOpen = false,
                                    onClose,
                                    currentChain,
                                  }: {
  isOpen?: boolean;
  onClose: () => void;
  currentChain: number;
}) => {
  const classes = useSelectChainStyled();

  const { handleChangeNetworkToSupported } = useAccount();


  const renderCard = ({
                        icon,
                        title,
                        subTitle,
                        chainConfig,
                      }: {
    icon: ReactNode;
    title: string;
    subTitle?: string;
    chainConfig: IAddEthereumChain;
  }) => {
    const handleClickSwitchChain = () => {
      if (Number(chainConfig.chainId) === currentChain) return;
      if (chainConfig.chainId === '0x1bf52') {
        window.location.href = 'https://solana.fangible.com/index';
      }
      handleChangeNetworkToSupported(chainConfig);
    };
    return (
      <div
        key={title}
        className={classes.cardItem}
        onClick={handleClickSwitchChain}
      >


        {icon}
        <div className={classes.textBox}>
          <h3>
            {title} <br />
            {subTitle && <span>{subTitle}</span>}
          </h3>
        </div>
        {/* {chainConfig.chainId === '0x3a99' && <p className={classes.recommend}>{t('header.select-chain.recommend')}</p>} */}
      </div>
    );
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className={classNames(classes.dialog)}
      classes={{
        root: classes.dialogRoot,
        paper: classes.paper,
      }
      }
    >
      <Box className={classes.dialogBody}>
        <Box className={classes.header}>
          <Box className={classes.title}>
            {t('headers.select-chain.title')}
          </Box>
          <img className={classes.close} onClick={onClose} src={ClosePng} alt='' />
        </Box>
        <div className={classes.cardWrapper}>
          {chainList.map(item => renderCard(getChainConfig(item)))}
        </div>
      </Box>
      {/*<DialogTitle disableTypography className={classes.root}>*/}
      {/*  <h1 className={classes.h1}>{t('headers.select-chain.title')}</h1>*/}
      {/*  <ModalCloseBtn onClick={onClose} className={classes.close} />*/}
      {/*</DialogTitle>*/}

      {/*<div className={classes.cardWrapper}>*/}
      {/*  {chainList.map(item => renderCard(getChainConfig(item)))}*/}
      {/*</div>*/}
    </Dialog>
  );
};
