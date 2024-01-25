import loadable from '@loadable/component';
import { Box, BoxProps } from '@material-ui/core';
import {
  BlockchainNetworkId,
  DefaultChainId,
  getChainSymbol,
} from 'modules/common/conts';
import { getChainId } from 'modules/common/utils/localStorage';
import React, { useMemo } from 'react';


export const getSymbolName = (chiaId: BlockchainNetworkId) => {
  return (
    getChainSymbol(chiaId as BlockchainNetworkId)?.chainSymbolName ??
    getChainSymbol(DefaultChainId).chainSymbolName
  );
};

interface props extends BoxProps {
  chiaId?: number;
  className?: string;
  children?: (props: { symbolName: string }) => React.ReactNode;
}

export const ChainSymbolIcon: React.FC<props> = ({
  chiaId: propsChiaId,
  className,
  children,
  ...restProps
}) => {
  const chiaId = propsChiaId || getChainId();
  const symbolName = useMemo(() => {
    return (
      getChainSymbol(chiaId as BlockchainNetworkId)?.chainSymbolName ??
      getChainSymbol(DefaultChainId).chainSymbolName
    );
  }, [chiaId]);
  // console.log("--------symbolName--------", symbolName)
  const LoadableContainer = loadable(
    async () =>
      import(`./chain/${symbolName}`).then(e => e[symbolName + 'Icon']),
    {
      fallback: <></>,
    },
  );
  return (
    <Box className={className} {...restProps}>
      <LoadableContainer />
      {symbolName && children?.({ symbolName })}
    </Box>
  );
};
