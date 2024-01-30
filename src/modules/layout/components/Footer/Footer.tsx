import { useFooterStyle } from './useFooterStyle';
import { Box } from '@material-ui/core';
import { Logo } from '../Logo';
import { Applink } from '../AppLink';
import {useIsSMDown} from "modules/themes/useTheme";
export const Footer = () => {
  const mobile=useIsSMDown();
  const classes = useFooterStyle();
  return (
    <Box className={classes.root}>
      {!mobile && <Logo />}
      <Applink/>
    </Box>
  );
};
