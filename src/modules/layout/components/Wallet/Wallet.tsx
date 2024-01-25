// import classNames from 'classnames';
// import bnbLogo from 'modules/account/assets/bnb.svg';
// import { useAccount } from 'modules/account/hooks/useAccount';
// import { truncateWalletAddr } from 'modules/common/utils/truncateWalletAddr';
// import UserIcon from './assets/userIcon.svg';
import UserIcon from '../../../../assets/img/header/info.png';
import { Button } from 'modules/uiKit/Button';
import React
  // , { useRef }
  from 'react';
// import { FocusOn } from 'react-focus-on';
// import { WalletCard } from '../WalletCard';
import { useWalletDropdown } from './useWalletDropdown';
import { useWalletStyles } from './useWalletStyles';
// import { getNativeTokenSymbol } from '../../../common/conts';
// import { useWeb3Balance } from 'modules/account/hooks/useWeb3React';

interface IWalletProps {
  address?: string;
  name?: string;
}

// TODO: replace with real data
// const logo = bnbLogo;

export const WalletComponent = ({
  address = '',
  name = 'Unnamed',
}: IWalletProps) => {
  const classes = useWalletStyles();

  // const { chainId } = useAccount();
  // const currency = getNativeTokenSymbol(chainId);

  const {
    // isOpened,
    // handleDisconnect,
    // handleClose,
    handleOpen,
  } = useWalletDropdown();

  // const controlRef = useRef<HTMLButtonElement>(null);

  // const { balance } = useWeb3Balance();

  return (
    <>
      <Button
        className={classes.accountBtn}
        onClick={handleOpen}
      >
        <img src={UserIcon} alt="" className={classes.userIcon}/>
      </Button>

      {/*<FocusOn*/}
      {/*  enabled={isOpened}*/}
      {/*  onEscapeKey={handleClose}*/}
      {/*  onClickOutside={handleClose}*/}
      {/*  focusLock={true}*/}
      {/*  scrollLock={false}*/}
      {/*  shards={[controlRef]}*/}
      {/*>*/}
      {/*  <div*/}
      {/*    className={classNames(*/}
      {/*      classes.dropdown,*/}
      {/*      isOpened && classes.dropdownActive,*/}
      {/*    )}*/}
      {/*  >*/}
      {/*    <WalletCard*/}
      {/*      address={address}*/}
      {/*      name={name}*/}
      {/*      currency={currency}*/}
      {/*      logo={logo}*/}
      {/*      balance={balance}*/}
      {/*      handleDisconnect={handleDisconnect}*/}
      {/*      handleClose={handleClose}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</FocusOn>*/}
    </>
  );
};

export const Wallet = () => {
  // const { address } = useAccount();



  return (
    <div>
      sss
    </div>
    // <WalletComponent
    //   address={address}
    //   name={""}
    // />
  );
};
