import {useEffect, useState} from 'react';
import {getLocalStorageCtx} from '../utils/localStorage';

export const useAccountBrc = () => {
  const ctx = getLocalStorageCtx();
  const [ctxState, setCtxState] = useState<any>();

  useEffect(() => {
    if (ctx) {
      setCtxState(ctx)
    }
    // eslint-disable-next-line
  }, []);

  return {ctxState,...ctxState, setCtxState};
};

