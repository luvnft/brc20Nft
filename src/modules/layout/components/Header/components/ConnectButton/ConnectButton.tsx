import React, { useRef,useState } from 'react';
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
import {DialogWarp} from '../DialogWarp';
import { useBtc } from 'modules/web3/wallet';
// import { useDispatchRequest } from '@redux-requests/react';
import {BtcConnectorName} from 'modules/web3/wallet';


const ConnectButtonPage = (
  { classes = {} }: { classes: any },
) => {
  let [visibility, setVisibility] = useState<boolean>(false);
  const controlRef = useRef<HTMLButtonElement>(null);
  const { connect, address, signMessage, disconnect } = useBtc(); // BTC
  const {
    isOpened,
    handleClose,
    handleOpen,
  } = useWalletDropdown();
  const connectClick = () => {
    if (address) return false;
    setVisibility(true)
  };
  const connectWalletClick=(type:BtcConnectorName)=>{
    connect(type).then((res: any) => {
      signMessage(SIGN, 'Unisat').then(sign => {

      });
    });
  }
  const openClick = () => {
    if (address) {
      handleOpen();
    }else {

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



        <DialogWarp
          visibility={visibility}
          setVisibility={setVisibility}
          title={t('ConnectionFailed')}
        >
          <Box className={classes.dialogBody}>
            <Box className={classes.diaTop}>

              <Button
                type='button'
                onClick={()=>connectWalletClick('OKX')}
                className={classNames('back')}
                loading={false}>
                OKX
              </Button>
              <Button
                type='button'
                onClick={()=>connectWalletClick('Unisat')}
                className={classNames(classes.backButtonOrder, 'back')}
                loading={false}>
               UNISAT
              </Button>


            </Box>
            <Box className={classes.footer}>
              <Button
                type='button'
                onClick={() => {
                  setVisibility(false);
                }}
                className={classNames(classes.backButtonOrder, 'back')}
                loading={false}>
                Back
              </Button>
              <Button
                onClick={() => {
                  setVisibility(false);
                  window.close();
                }}
                type='button'
                className={classNames(classes.buyButtonOrder, 'buyButtonOrder')}
              >
                Confirm
              </Button>
            </Box>


          </Box>
        </DialogWarp>



      </Box>

    </>
  );
};

const ConnectButton = withStyles(styles)(ConnectButtonPage);

export { ConnectButton };
