import Web3 from 'web3';
import { Token0ABI } from 'modules/web3/contracts';


export const getCode = async (web3: Web3, address: string) => {
  return await web3.eth.getCode(address)
};

export const getToken0 = async (web3: Web3, address: string) => {
  const WETHERC20Contract = new web3.eth.Contract(
    Token0ABI,
    address,
  );
  return await WETHERC20Contract.methods.token0().call();
};
