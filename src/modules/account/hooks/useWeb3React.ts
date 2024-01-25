import { useQuery } from '@redux-requests/react';
import BigNumber from 'bignumber.js';
import { useCount } from 'modules/common/hooks/useTimer';
import { getJWTToken, getLoginType } from 'modules/common/utils/localStorage';
import { useCallback, useEffect, useState } from 'react';
import Web3 from 'web3';
import { connectWallet } from '../api/connectWallet';
import { ISetAccountData, setAccount } from '../store/actions/setAccount';
import { useHistory } from 'react-router-dom';
import { ERC20ABI, FactoryABI, FactoryV3ABI } from 'modules/web3/contracts';

let web3: Web3;
let provider: any;
let topBalance: BigNumber;
let topAddress: string;
let topChainId: number;

export interface IWeb3React {
  web3: Web3;
  address: string;
  account: string;
  loading: boolean;
  provider: any;
  chainId: number;
  // balance: BigNumber;
}

export const getBalance = async (web3: Web3, address: string) =>
  await web3.eth.getBalance(address);


export const getTransaction = async (web3: Web3, address: string) =>
  await web3.eth.getTransaction(address);


export const getTokenBalance = async (web3: Web3, tokenContract: string, account: string) => {
  const WETHERC20Contract = new web3.eth.Contract(
    ERC20ABI,
    tokenContract,
  );
  const balanceOf = await WETHERC20Contract.methods.balanceOf(account).call();
  let decimals = await WETHERC20Contract.methods.decimals().call();
  return new BigNumber(balanceOf).shiftedBy(-1 * decimals).toFixed();
};
export const getDecimals = async (web3: Web3, tokenContract: string) => {
  const WETHERC20Contract = new web3.eth.Contract(
    ERC20ABI,
    tokenContract,
  );
  return await WETHERC20Contract.methods.decimals().call();
};
export const getTotalSupply = async (web3: Web3, tokenContract: string) => {
  const WETHERC20Contract = new web3.eth.Contract(
    ERC20ABI,
    tokenContract,
  );
  return await WETHERC20Contract.methods.totalSupply().call();
};
export const getPairAddress = async (web3: Web3, tokenA: string, baseToken: string | any) => {
  const WETHERC20Contract = new web3.eth.Contract(
    FactoryABI,
    process.env.REACT_APP_UNIV2Factory,
  );
  return await WETHERC20Contract.methods.getPair(tokenA, baseToken).call();
};
export const getV3PairAddress = async (web3: Web3, tokenA: string, baseToken: string | any, input: any) => {
  const WETHERC20Contract = new web3.eth.Contract(
    FactoryV3ABI,
    process.env.REACT_APP_UNIV3Factory,
  );
  return await WETHERC20Contract.methods.getPool(tokenA, baseToken, input).call();
};


export const useWeb3React = (): IWeb3React => {
  const [address, setAddress] = useState<string>(topAddress);
  const [chainId, setChainId] = useState<number>(topChainId);
  // const [balance, setBalance] = useState<BigNumber>(topBalance);
  const [loading, setLoading] = useState(true);
  const [web3Test, setWeb3Test] = useState<any>(new Web3(new Web3.providers.HttpProvider('https://rpc.ankr.com/eth')));
  const history = useHistory();
  const init = useCallback(async () => {

    // console.log(getLoginType());
    const [_web3, _provider] = web3 ? [web3, provider] : getLoginType() === 'email' ? [web3Test, window['ethereum']] : await connectWallet(true);
    // console.log(_web3);
    // console.log(_provider);
    if (!web3) {
      web3 = _web3;
      provider = _provider;
    }
    const _address = (await web3.eth.getAccounts())[0];
    // const balance = await getBalance(web3, _address);

    // const balanceBigNumber = new BigNumber(web3.utils.fromWei(balance));
    // topBalance = balanceBigNumber;
    topAddress = _address;
    topChainId = await web3.eth.getChainId();
    setChainId(topChainId);
    setAddress(_address);
    // setBalance(balanceBigNumber);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // console.log('provider', provider);
    if (provider) {
      provider.on('chainChanged', (chainId: number) => {
        if (window.location.pathname.indexOf('/nft/buy/poolId/') === 0) {
          history.push('/home');
        }
        window.location.reload();
      });
      provider.on('disconnect', (error: { code: number; message: string }) => {
        setLoading(false);
        setChainId(0);
      });
      provider.on('accountsChanged', (accounts: string[]) => {
        init();
      });
    }
  }, [history, init]);

  useEffect(() => {
    if (chainId) {
      setLoading(false);
    }
  }, [chainId, loading]);
  useEffect(() => {
    if (!getJWTToken() && !web3Test) {
      setWeb3Test(new Web3(new Web3.providers.HttpProvider('https://rpc.ankr.com/eth')));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (getJWTToken()) {
      init();
    } else {
      setLoading(false);
    }
  }, [init, setLoading]);


  return {
    web3: getJWTToken() ? web3 : web3Test,
    address,
    account: address,
    loading,
    provider,
    chainId,
    // balance,
  };
};

export const useWeb3Balance = () => {
  const { loading, data } = useQuery<ISetAccountData | null>({
    type: setAccount.toString(),
  });
  const web3 = data?.web3;
  const address = data?.address;

  const count = useCount(5e3);
  const [loadingBalance, setLoadingBalance] = useState(false);
  const [balance, setBalance] = useState<BigNumber>(topBalance);
  useEffect(() => {
    if (web3 && address && !loading && !loadingBalance) {
      (async () => {
        setLoadingBalance(true);
        const balance = await getBalance(web3, address);
        setBalance(new BigNumber(web3.utils.fromWei(balance)));
        setLoadingBalance(false);
      })();
    }
    // eslint-disable-next-line
  }, [count, address, loading, web3]);
  return { balance };
};

export const getNotWeb3WalletInfo = () => {
  const isWeb3Wallet = window.ethereum;
  if (isWeb3Wallet) {
    const chainId = parseInt(window.ethereum.networkVersion, 10);
    return { chainId };
  }
};
