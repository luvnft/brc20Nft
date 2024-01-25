import { Avatar, Box, MenuItem, MenuList, Typography } from '@material-ui/core';
import BigNumber from 'bignumber.js';
import { CopyToClip } from 'modules/common/components/CopyToClip';
import { t } from 'modules/i18n/utils/intl';
import React from 'react';
import { useWalletCardStyles } from './WalletCardStyles';
import Truncate from 'react-truncate';
import {
  SelectChainDialog,
  useDialogState,
} from 'modules/layout/components/Header/components/SelectChainDialog';
import { useAccount } from 'modules/account/hooks/useAccount';
import { useCallback } from 'react';
import { setChainId } from 'modules/common/utils/localStorage';

const ENABLE_CURRENCY_ICON = false;

export interface IWalletCardProps {
  address: string;
  balance?: BigNumber;
  logo?: string;
  currency?: string;
  name?: string;
  handleDisconnect?: () => void;
  handleClose?: () => void;
}

export const WalletCard = ({
  address,
  balance,
  logo = '',
  currency = '',
  name,
  handleDisconnect,
  handleClose,
}: IWalletCardProps) => {
  const classes = useWalletCardStyles();
  const { chainId } = useAccount();
  const {
    opened: openedSelectChainDialog,
    open: openSelectChainDialog,
    close: closeSelectChainDialog,
  } = useDialogState();
  const mapChainIdName = useCallback(() => {
    setChainId(chainId);
    switch (chainId) {
      case 1:
        return t('headers.network.etherreum');
      case 4:
        return t('headers.network.rinkby');
      case 5:
        return t('headers.network.goerli');
      case 56:
        return t('headers.network.binance');
      case 97:
        return t('headers.network.binance-test');
      case 128:
        return t('headers.network.heco');
      case 137:
        return t('headers.network.polygon');
      case 12077:
        return t('headers.network.ankr-test');
      case 100:
        return t('headers.network.edge');
      case 15001:
        return t('headers.network.bas');
      case 80001:
        return t('headers.network.polygon-test');
      case 16350:
        return t('headers.network.ape');
      default:
        return t('headers.network.unknow');
    }
  }, [chainId]);
  // const handleMint = () => {
  //   history.push('/collections')
  // }
  return (
    <Box className={classes.root}>
      {name ? (
        <Box className={classes.row}>
          <Typography variant="h3" className={classes.name}>
            <Truncate lines={3}>{name}</Truncate>
          </Typography>
        </Box>
      ) : null}
      {/* <Box
        onClick={openSelectChainDialog}
        className={classNames(classes.btnChangeNet, classes.connectBorder)}
      >
        {mapChainIdName()}
      </Box> */}
      <SelectChainDialog
        isOpen={openedSelectChainDialog}
        onClose={closeSelectChainDialog}
        currentChain={chainId}
      />
      {address && (
        <Box className={classes.row}>
          <CopyToClip address={address} />
        </Box>
      )}

      {balance ? (
        <Box className={classes.row}>
          <Box className={classes.walletBalance}>
            {logo && ENABLE_CURRENCY_ICON ? (
              <Avatar src={logo} className={classes.walletLogo} />
            ) : null}
            {balance.toFormat(5)} {currency}
          </Box>
        </Box>
      ) : null}

      <MenuList className={classes.menuList}>
        <MenuItem className={classes.menuItem} onClick={openSelectChainDialog}>
          {mapChainIdName()}
        </MenuItem>
        {/* <MenuItem className={classes.menuItem}>
          My NFT’s
        </MenuItem> */}
        <MenuItem className={classes.menuItem} onClick={handleDisconnect}>
          {t('headers.disconnect')}
        </MenuItem>
      </MenuList>
    </Box>
  );
};
