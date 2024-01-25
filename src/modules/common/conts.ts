import { ChainSymbol, TokenSymbol } from './types/TokenSymbol';

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const ZERO_ADDRESS2 = '0x000000000000000000000000000000000000dead';


export enum BlockchainNetworkId {
  mainnet = 1,
  ropsten = 3,
  goerli = 5,
  smartchain = 56,
  ankrTest = 12077,
  sepolia = 11155111,
}

const NativeTokens: {
  [key in BlockchainNetworkId]: TokenSymbol;
} = {
  [BlockchainNetworkId.mainnet]: TokenSymbol.ETH,
  [BlockchainNetworkId.ropsten]: TokenSymbol.ETH,
  [BlockchainNetworkId.goerli]: TokenSymbol.ETH,
  [BlockchainNetworkId.sepolia]: TokenSymbol.ETH,
  [BlockchainNetworkId.smartchain]: TokenSymbol.BNB,
  [BlockchainNetworkId.ankrTest]: TokenSymbol.ANKR,
};

const ChainsInfo = {
  [BlockchainNetworkId.mainnet]: { chainSymbolName: ChainSymbol.ETH },
  [BlockchainNetworkId.ropsten]: { chainSymbolName: ChainSymbol.ETH },
  [BlockchainNetworkId.goerli]: { chainSymbolName: ChainSymbol.ETH },
  [BlockchainNetworkId.sepolia]: { chainSymbolName: ChainSymbol.ETH },
  [BlockchainNetworkId.smartchain]: { chainSymbolName: ChainSymbol.BNB },
  [BlockchainNetworkId.ankrTest]: { chainSymbolName: ChainSymbol.ANKR },
};

export function getChainSymbol(chainId: BlockchainNetworkId) {
  return ChainsInfo[chainId];
}

export function getNativeTokenSymbol(chainId: BlockchainNetworkId) {
  return NativeTokens[chainId];
}

// const BlockChainExplorerAddress: { [key in BlockchainNetworkId]: String} = {
//   [BlockchainNetworkId.mainnet]: 'https://etherscan.io/',
//   [BlockchainNetworkId.ropsten]: 'https://ropsten.etherscan.io/',
//   [BlockchainNetworkId.goerli]: 'https://goerli.etherscan.io/',
//   [BlockchainNetworkId.smartchain]: 'https://bscscan.com/',
//   [BlockchainNetworkId.ankrTest]: 'https://testnetscan.ankr.com/',
// };

export const getBlockChainExplorerAddress = (chainId?: BlockchainNetworkId) => {
  // BlockChainExplorerAddress[chainId]
  // console.log(chainId);
  return process.env.REACT_APP_BLOCK+'/'
};

const BlockChainExplorerName: { [key in BlockchainNetworkId]: String} = {
  [BlockchainNetworkId.mainnet]: 'ETHScan',
  [BlockchainNetworkId.ropsten]: 'RopstenScan',
  [BlockchainNetworkId.smartchain]: 'BSCScan',
  [BlockchainNetworkId.goerli]: 'Goerli',
  [BlockchainNetworkId.sepolia]: 'Sepolia',
  [BlockchainNetworkId.ankrTest]: 'Ankr',
};

export const getBlockChainExplorerName = (chainId: BlockchainNetworkId) =>
  BlockChainExplorerName[chainId];

const BlockChainTokenSymbol: {
  [key in BlockchainNetworkId]: String;
} = {
  [BlockchainNetworkId.mainnet]: TokenSymbol.ETH,
  [BlockchainNetworkId.ropsten]: TokenSymbol.ETH,
  [BlockchainNetworkId.goerli]: TokenSymbol.ETH,
  [BlockchainNetworkId.sepolia]: TokenSymbol.ETH,
  [BlockchainNetworkId.smartchain]: TokenSymbol.BNB,
  [BlockchainNetworkId.ankrTest]: TokenSymbol.ANKR,
};

export const DefaultTokenSymbol = TokenSymbol.ETH;
export const DefaultChainId = BlockchainNetworkId.mainnet;

export const getTokenSymbol = (chainId: BlockchainNetworkId) =>
  BlockChainTokenSymbol[chainId] || DefaultTokenSymbol;

export enum NftFtKeys {
  NFT,
  FT,
}

export const NftFtTabs = [
  {
    label: 'NFT',
    value: NftFtKeys.NFT,
  },
  {
    label: 'FT',
    value: NftFtKeys.FT,
  },
];
const baseEnv = process.env.REACT_APP_BASE_ENV;
export const isChainSupported = baseEnv === "DEV" ? [BlockchainNetworkId.goerli] : [BlockchainNetworkId.mainnet];

