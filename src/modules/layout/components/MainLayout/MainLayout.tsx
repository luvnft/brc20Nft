import { ThemeProvider } from '@material-ui/styles';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { getTheme } from 'modules/common/utils/getTheme';
import { Themes, CurrentTheme } from 'modules/themes/types';
import { Header } from '../Header';
import { useMainLayoutStyles } from './MainLayoutStyles';
import { Box } from '@material-ui/core';
import { Footer } from '../Footer';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../../../store';


export interface ILayoutProps {
  children?: React.ReactNode;
  headerTheme?: Themes;
}

export const MainLayout = ({
                             children,
                             headerTheme = CurrentTheme,
                           }: ILayoutProps) => {
  const classes = useMainLayoutStyles();
  const isDarkBg = headerTheme === Themes.dark;
  // const { location: { pathname } } = useSelector((store: RootState) => store.router);
  const [scrollShow, setScrollShow] = useState<boolean>(false);
  useEffect(() => {
    async function scroll() {
      function scrollFn() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        setScrollShow(scrollTop > 15);
      }
      scrollFn();
      window.addEventListener('scroll', scrollFn);
    }

    scroll();
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);
  return (
    <ThemeProvider theme={getTheme(CurrentTheme)}>
      <Box className={
        classNames(
          classes.root,
          isDarkBg && 'dark',
        )}>
        <Header scrollShow={scrollShow}/>
        <main className={classNames(classes.content,scrollShow && 'scroll')}>
          {children}
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};
