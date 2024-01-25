import { Box, Typography } from '@material-ui/core';
import {
  SelectChainDialog,
  useDialogState,
} from 'modules/layout/components/Header/components/SelectChainDialog';
import React from 'react';
import { useAccount } from '../../../account/hooks/useAccount';
import { t } from '../../../i18n/utils/intl';
import { Button } from '../../../uiKit/Button';
import { useWrongNetworkContentStyles } from './useWrongNetworkContentStyles';
import { isChainSupported, getBlockChainExplorerName } from 'modules/common/conts';
import classNames from 'classnames';

export const WrongNetworkContent = () => {
  const classes = useWrongNetworkContentStyles();

  const { loading, chainId } = useAccount();

  const {
    opened: openedSelectChainDialog,
    open: openSelectChainDialog,
    close: closeSelectChainDialog,
  } = useDialogState();

  return (
    <Box mb={3} textAlign="center" className={classes.root}>
      <Typography variant="h1" className={classes.caption}>
        {t('change-wallet.title')}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        Change network to {getBlockChainExplorerName(parseInt(isChainSupported.toString()))}
      </Typography>
      <>
        <Button
          onClick={openSelectChainDialog}
          loading={loading}
          className={classNames('default', classes.connectBtn)}
        >
          {t('change-wallet.submit')}
        </Button>
        <SelectChainDialog
          isOpen={openedSelectChainDialog}
          onClose={closeSelectChainDialog}
          currentChain={chainId}
        />
      </>
    </Box>
  );
};
