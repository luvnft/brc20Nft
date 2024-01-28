import { useFooterStyle } from './useFooterStyle';
import { Box } from '@material-ui/core';
import { Logo } from '../Logo';
import { Applink } from '../AppLink';
export const Footer = () => {

  const classes = useFooterStyle();
  return (
    <Box className={classes.root}>
      <Logo />
      <Applink/>
    </Box>
  );
};
