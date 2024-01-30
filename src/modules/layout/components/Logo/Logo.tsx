import classNames from 'classnames';
import { Link } from 'react-router-dom';
import LogoPng from 'assets/img/logo/logo.png';
// import mobileLogo from 'assets/img/mobile/mobileLogo.png';
import { useLogoStyles } from './LogoStyles';
import { HomeRoutesConfig } from 'modules/Home/Routes';
import {useIsSMDown} from "../../../themes/useTheme";

export const Logo = () => {
  const classes = useLogoStyles();
  const mobile=useIsSMDown();
  return (
    <Link
      to={HomeRoutesConfig.Index.path}
      className={classes.root}
    >
      <img
      alt="DEXX"
      className={classNames(classes.img, classes.ableDark)}
      src={mobile ? LogoPng:LogoPng}
      />
    </Link>
  );
};
