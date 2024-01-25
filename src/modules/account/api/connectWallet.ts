import Web3Modal, { IProviderOptions } from 'web3modal';
import { PALETTE } from 'modules/themes/mainTheme';
import { fade, lighten } from '@material-ui/core';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';
import { BlockchainNetworkId } from 'modules/common/conts';

export const RPC = {
  [BlockchainNetworkId.mainnet]: 'https://mainnet.infura.io/v3/0b500c5f885b43a4ab192e8048f6fa88',
};

const bridge = 'https://bridge.walletconnect.org';
// const bridge = 'https://bridger.ankr.com';

export async function connectWallet(cacheProvider?: boolean) {
  const providerOptions: IProviderOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        bridge,
        rpc: RPC,
      },
    },
  };

  const modal = new Web3Modal({
    cacheProvider: true,
    providerOptions,
    theme: {
      background: PALETTE.background.paper,
      main: PALETTE.text.primary,
      secondary: fade(PALETTE.text.primary, 0.5),
      border: PALETTE.background.default,
      hover: lighten(PALETTE.background.paper, 0.03),
    },
  });
  const provider = await modal.connect();
  provider.defaultOnlineGasPrice = 1
  if (provider.chainId === '0x89') {
    provider.defaultOnlineGasPrice = 1
  }
  if (provider.bridge === bridge) {
    provider.notSupportNewBlockHeaders = 1
  }

  const web3 = new Web3(provider);
  return [web3, provider] as [Web3, any];
}
