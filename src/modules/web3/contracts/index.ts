import { default as ActressMintRaw } from './actress_contract.json';
import { default as DfdunkMintRaw } from './dfdunk_contract.json';
import { default as MarketRaw } from './market_contract.json';
import { default as ERC20Raw } from './erc20_contract.json';
import { default as ERC20TokenRaw } from './ERC20.json';
import { default as MarketOrderRaw } from './marketAbi.json';
import { default as Factory } from './factory.json';
import { default as FactoryV3 } from './factoryV3.json';
import { default as Token0 } from './token0.json';
import { AbiItem } from 'web3-utils';


export const ActressMint: AbiItem = ActressMintRaw as unknown as AbiItem;
export const DfdunkMint: AbiItem = DfdunkMintRaw as unknown as AbiItem;
export const MarketABI: AbiItem = MarketRaw as unknown as AbiItem;
export const ERC20ABI: AbiItem = ERC20Raw as unknown as AbiItem;
export const ERC20: AbiItem = ERC20TokenRaw as unknown as AbiItem;
export const MarketOrderABI: AbiItem = MarketOrderRaw as unknown as AbiItem;
export const FactoryABI: AbiItem = Factory as unknown as AbiItem;
export const FactoryV3ABI: AbiItem = FactoryV3 as unknown as AbiItem;
export const Token0ABI: AbiItem = Token0 as unknown as AbiItem;
