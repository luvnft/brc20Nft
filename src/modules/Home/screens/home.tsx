import { ThemeProvider } from '@material-ui/core';
import { useHomeStyle } from './useHomeStyle';
import { Box } from '@material-ui/core';
import { getTheme } from 'modules/common/utils/getTheme';
import { CurrentTheme } from 'modules/themes/types';
import classNames from 'classnames';
// new IntersectionObserver
export const Home = () => {
  const classes = useHomeStyle();
  return (
    <ThemeProvider theme={getTheme(CurrentTheme)}>
      <Box className={classNames(classes.root)}>
      是的是的
      </Box>
    </ThemeProvider>
  );
};
