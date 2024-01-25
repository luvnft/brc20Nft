export enum Themes {
  light = 'light',
  dark = 'dark',
}

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    HD: true;
    WXGAPlus: true;
    HDPlus: true;
  }
}

export const CurrentTheme = process.env.REACT_APP_BASE_ENV_BRANCH === 'DEXX' ? Themes.dark : Themes.light;


