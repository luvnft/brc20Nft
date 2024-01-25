import { TokenSymbol } from 'modules/common/types/TokenSymbol';
import { ReactComponent as EthereumIcon } from '../assets/ethereum.svg';
import { ReactComponent as AnkrIcon } from '../assets/ankr.svg';
import Web3 from "web3";
import {
  BlockchainNetworkId,
  getBlockChainExplorerAddress,
} from 'modules/common/conts';
import { t } from 'modules/i18n/utils/intl';

export type ChainType = BlockchainNetworkId.mainnet | BlockchainNetworkId.goerli | BlockchainNetworkId.sepolia | BlockchainNetworkId.ankrTest;

export const getChainConfig = (tarChain: ChainType) => {
  const chainList: {
    [key in ChainType]: any;
  } = {
    [BlockchainNetworkId.mainnet]: {
      icon: <EthereumIcon />,
      title: t('headers.select-chain.eth'),
      subTitle: '',
      chainConfig: {
        chainId: '0x1',
        chainName: 'Ethereum Chain Mainnet',
        nativeCurrency: {
          name: 'Ethereum',
          symbol: TokenSymbol.ETH,
          decimals: 18,
        },
        rpcUrls: [
          'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        ],
        blockExplorerUrls: [
          getBlockChainExplorerAddress(BlockchainNetworkId.mainnet),
        ],
      },
    },
    [BlockchainNetworkId.goerli]: {
      icon: <EthereumIcon />,
      title: 'Goerli',
      subTitle: '',
      chainConfig: {
        chainId: '0x5',
        chainName: 'Goerli',
        nativeCurrency: {
          name: 'Ethereum',
          symbol: TokenSymbol.ETH,
          decimals: 18,
        },
        rpcUrls: [
          'https://goerli.infura.io/v3/',
        ],
        blockExplorerUrls: [
          getBlockChainExplorerAddress(BlockchainNetworkId.goerli),
        ],
      },
    },
    [BlockchainNetworkId.sepolia]: {
      icon: <EthereumIcon />,
      title: 'Sepolia',
      subTitle: '',
      chainConfig: {
        chainId: Web3.utils.numberToHex(11155111),
        chainName: 'Sepolia',
        nativeCurrency: {
          name: 'Ethereum',
          symbol: TokenSymbol.ETH,
          decimals: 18,
        },
        rpcUrls: [
          'https://sepolia.infura.io/v3/',
        ],
        blockExplorerUrls: [
          getBlockChainExplorerAddress(BlockchainNetworkId.sepolia),
        ],
      },
    },
    [BlockchainNetworkId.ankrTest]: {
      icon: <AnkrIcon />,
      title: t('headers.select-chain.ankr'),
      subTitle: '',
      chainConfig: {
        chainId: '0x2f2d',
        chainName: 'Coq TestNet',
        nativeCurrency: {
          "name": "Coq TestNet",
          "symbol": TokenSymbol.ANKR,
          "decimals": 18
        },
        rpcUrls: ["https://testnet.ankr.com"],
        blockExplorerUrls: ["https://testnetscan.ankr.com/"],
      },
    },
  };

  return chainList[tarChain];
};
