import { resetRequests } from '@redux-requests/core';
import { useDispatchRequest, useQuery } from '@redux-requests/react';
import {
  getJWTToken, getTimestamp, setLoginType,
} from 'modules/common/utils/localStorage';
import { IAddEthereumChain } from 'modules/layout/components/Header/components/SelectChainDialog';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'store/useAppDispatch';
import { isChainSupported } from 'modules/common/conts';
import { changeNetworkToSupported } from '../store/actions/changeNetworkToSupported';
import { connect } from '../store/actions/connect';
import { ISetAccountData, setAccount } from '../store/actions/setAccount';
import { updateAccount } from '../store/actions/updateAccount';
import { useWeb3React } from './useWeb3React';

let run = false;
let initRemoteDataRun = false;
export const useAccount = () => {
  const dispatch = useAppDispatch();
  const disPatchRequst = useDispatchRequest();
  const [address, setAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const {
    loading: setAccountLoading,
    data,
    error,
  } = useQuery<ISetAccountData | null>({
    type: setAccount.toString(),
  });
  // console.log('data', data);
  // console.log('setAccount.toString()', data);

  const web3Data = useWeb3React();
  // console.log('web3Data', web3Data);
  const token = getJWTToken() ?? '';
  const timestamp = getTimestamp() ?? '';

  useEffect(() => {
    if (!web3Data.loading && !data && token && !run) {
      run = true;
      dispatch(
        setAccount({
          token,
          timestamp,
          ...web3Data,
        }),
      );
    }
  }, [data, dispatch, timestamp, token, web3Data]);

  useEffect(() => {
    return () => {
      resetRequests([setAccount.toString()]);
    };
  }, []);

  // const address = data?.address;
  // const isConnected = !!address;
  useEffect(() => {
    if (data) {
      setAddress(data && data.address ? data.address : '');
      setIsConnected(!!data?.address);
    }
  }, [data]);


  useEffect(() => {
    if (!initRemoteDataRun && web3Data?.address && isConnected) {
      initRemoteDataRun = true;
      dispatch({
        type: connect().type,
        payload: web3Data,
      });
    }
  }, [dispatch, web3Data, isConnected]);


  const chainId = parseInt((data?.chainId ?? 0).toString());

  const walletSupportNetworkChange = !!data?.web3?.givenProvider;

  const handleConnect = useCallback(() => {
    // console.log(1, connect().type);
    dispatch(connect());
    setLoginType('wallet');
  }, [dispatch]);

  const handleChangeNetworkToSupported = useCallback(
    async (chainConfig?: IAddEthereumChain, autoRefresh?: boolean) => {
      try {
        // console.log("123123")
        const result = await disPatchRequst(
          changeNetworkToSupported(chainConfig),
        );
        if (autoRefresh) return window.location.reload();
        return Promise.resolve(result);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    [disPatchRequst],
  );

  const handleUpdate = useCallback(
    updatedData => {
      dispatch(updateAccount(updatedData));
    },
    [dispatch],
  );
  // console.log('address', address);
  const connectLoading = !Boolean(!setAccountLoading && !web3Data.loading);
  return {
    loading: connectLoading,
    isConnected,
    isChainSupported,
    walletSupportNetworkChange,
    address,
    error,
    handleConnect,
    handleChangeNetworkToSupported,
    handleUpdate,
    chainId,
    token
  };
};
