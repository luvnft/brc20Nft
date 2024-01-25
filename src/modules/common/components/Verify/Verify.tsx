import { CurrentTheme, Themes } from 'modules/themes/types';
import {useVerifyStyle} from './useVerifyStyle';
import DarkVerifyImg from 'assets/img/collectonDetail/dark-verify.png';
import LightVerifyImg from 'assets/img/collectonDetail/light-verify.png';
export const VerifyComp = () => {
  const classes = useVerifyStyle();
  return (
    <img className={classes.root} src={CurrentTheme === Themes.dark ?DarkVerifyImg:LightVerifyImg} alt='' />
  );
};
