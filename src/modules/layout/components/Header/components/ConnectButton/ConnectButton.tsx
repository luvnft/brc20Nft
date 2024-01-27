import React, { useRef } from 'react';
import { t } from 'modules/i18n/utils/intl';
import { Box } from '@material-ui/core';
import classNames from 'classnames';
import { useWalletDropdown } from 'modules/layout/components/Wallet/useWalletDropdown';
import { FocusOn } from 'react-focus-on';
import { withStyles } from '@material-ui/core';
import { styles } from './ConnectButtonStyles';
import { truncateWalletAddr } from 'modules/common/utils/truncateWalletAddr';
import { Button } from 'modules/uiKit/Button';
import { SIGN } from 'assets/js/const';

import { useBtc } from 'modules/web3/wallet';
// import { useDispatchRequest } from '@redux-requests/react';

const ConnectButtonPage = (
  { classes = {} }: { classes: any },
) => {
  const controlRef = useRef<HTMLButtonElement>(null);
  const { connect, address, signMessage, disconnect } = useBtc();
  const {
    isOpened,
    handleClose,
    handleOpen,
  } = useWalletDropdown();
  const connectClick = () => {
    if (address) return false;
    connect('Unisat').then((res: any) => {
      signMessage(SIGN, 'Unisat').then(sign => {

      });
    });
  };
  const openClick = () => {
    if (address) {
      handleOpen();
    }

  };

  return (
    <>
      <Box onClick={openClick} className={classes.root}>
        <Button
          type='button'
          className={classNames(classes.connect)}
          loading={false}
          onClick={connectClick}
        >
          {address ? truncateWalletAddr(address) : t('Connect')}
        </Button>


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
              !address && 'none',
              isOpened && classes.dropdownActive,
            )}
          >
            <div className={classes.absolute}>

              <Box onClick={() => {
                disconnect();
              }}
                   className={classNames(classes.language)}
              >
                断开链接
              </Box>

            </div>
          </div>
        </FocusOn>


      </Box>

    </>
  );
};

const ConnectButton = withStyles(styles)(ConnectButtonPage);

export { ConnectButton };
