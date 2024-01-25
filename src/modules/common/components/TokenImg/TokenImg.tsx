import { useTokenImgStyle } from './useTokenImgStyle';
import { TokenMap } from '../../../../assets/js/imageMap';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useQuery } from '@redux-requests/react';
import { fetchCurrencyRate } from '../../actions/commonRequest';

interface TokenImgCompInterface {
  token?: string;
  size?: string
}

export const TokenImgComp = (
  {
    token = '',
    size,
  }: TokenImgCompInterface,
) => {
  const classes = useTokenImgStyle();
  const [src, setSrc] = useState<string>(token as string);
  const { data: currencyRate } = useQuery<any>({
    type: fetchCurrencyRate.toString(),
  });
  useEffect(() => {
    if (token && token.length > 8 && currencyRate) {
      currencyRate && currencyRate.length > 0 && currencyRate.forEach((d: any) => {
        if (token.toLowerCase() === d.currency_address.toLowerCase()) {
          setSrc(d.currency_symbol);
        }
      });
    } else {
      setSrc(token)
    }
  }, [src, token, currencyRate]);


  return (
    <img className={classNames(classes.root, src, size)}
      src={src === 'USDT' ? TokenMap.USDT : src === 'WETH' ? TokenMap.WETH : src === 'ETH' ? TokenMap.ETH : ''}
      alt='' />
  );

};
