import { useFooterStyle } from './useFooterStyle';
import { Box } from '@material-ui/core';
import x from 'assets/img/footer/x.png';
import tg from 'assets/img/footer/tg.png';
import d from 'assets/img/footer/d.png';
import m from 'assets/img/footer/m.png';
import { LINK } from 'assets/js/const';

export const Footer = () => {

  const classes = useFooterStyle();
  return (
    <Box className={classes.root}>
      <Box className={classes.flex}>
        <Box className={classes.left}>
          <Box className={classes.openBox}>
            <img src={x} alt='' onClick={() => {
              window.open(LINK.x);
            }} />
            <img src={tg} alt='' onClick={() => {
              window.open(LINK.tg);
            }} />
            <img src={d} alt='' />
            <img src={m} alt='' />
          </Box>
          <p className={classes.brcex}>© 2023 xxxxxxx</p>
        </Box>
        <Box className={classes.right}>
          <Box className={classes.itemFlex}>
            <Box className={classes.item}>
              <p className={classes.first}>App</p>
              <p>Swap</p>
              <p>Tokens</p>
              <p>Pools</p>
            </Box>
            <Box className={classes.item}>
              <p className={classes.first}>Protocol</p>
              <p>Community</p>
              <p>Governance</p>
              <p>Developers</p>
            </Box>
          </Box>
          <Box className={classes.itemFlex}>
            <Box className={classes.item}>
              <p className={classes.first}>Company</p>
              <p>Careers</p>
              <p>Blog</p>
            </Box>
            <Box className={classes.item}>
              <p className={classes.first}>Get Help</p>
              <p>Contact Us</p>
              <p>Help Center</p>
            </Box>
          </Box>

        </Box>

      </Box>
    </Box>
  );
};
