import { createMuiTheme, darken, fade, lighten } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { jaJP } from '@material-ui/core/locale';
import {
  BREAKPOINTS,
  //  BTN_TRANSITION_TIME
} from './const';
import { FONTS, mainTheme } from './mainTheme';
import { Themes } from './types';

export const PALETTE = {
  type: Themes.dark,
  background: {
    default: '#000000',
    paper: '#fff',
  },
  primary: {
    light: lighten('#0075FF', 0.1),
    main: '#0075FF',
    dark: darken('#0075FF', 0.2),
  },
  common:{
    white: '#ffffff',
    black:'#000000'
  },
  grey:{
    50:'#FFC904',
    200:'#11AD7A',
    300: '#181A20',
    500: '#EAEAEA',
    700:'#F36464',
    900:'#565656',
    'A100':'#EBEBEB',
    'A200':'#797979',
    'A400':'#2E2E2E',
    'A700':'#262626',
  },
  text: {
    primary: '#EBEBEB',
    secondary: fade('#000', 0.5),
    disabled:'',
    hint:''
  },
  action:{
    active: 'rgba(0, 0, 0, 0.54)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  },
  warning: {
    main: '#FFB63C',
  },
  success: {
    main: '#36C98E',
  },
};

const defaultTheme = createMuiTheme({
  spacing: 8,
  palette: PALETTE as PaletteOptions,
  breakpoints: BREAKPOINTS,
},jaJP);

export const darkTheme = createMuiTheme({
  ...mainTheme,
  typography: {
    fontFamily: FONTS.primary,
    color: PALETTE.text.primary,
  },
  palette: PALETTE as PaletteOptions,
  overrides: {
    ...mainTheme.overrides,

    MuiFormLabel: {
      ...mainTheme.overrides?.MuiFormLabel,
      root: {
        color: 'white !important',
      },
    },

    MuiTypography: {
      ...mainTheme.overrides?.MuiTypography,
      root: {
        ...mainTheme.overrides?.MuiTypography?.root,
        '& a': {
          '&:hover': {
            color: PALETTE.text.primary,
          },
        },
      },
    },

    MuiButton: {
      ...mainTheme.overrides?.MuiButton,

      contained: {
        ...mainTheme.overrides?.MuiButton?.contained,
        // backgroundColor: '#282828',
        // background: 'linear-gradient(259.57deg, #2663FF 1.58%, #FF3828 92.54%)',

        // '&:hover': {
        //   color: mainTheme.palette.common.black,
        //   borderColor: fade(mainTheme.palette.common.black, 0),
        //   backgroundColor: '#282828',
        //   // background: 'linear-gradient(259.57deg, #2663FF 1.58%, #FF3828 92.54%)',

        //   '&:before': {
        //     transform: 'translateY(0)',
        //   },
        // },

        '&.Red-Violet': {
          background:
            'linear-gradient(259.57deg, #2663FF 1.58%, #FF3828 92.54%)',
        },

        '&.White': {
          background: '#FFF',
          color: '#000',
        },
      },

      outlined: {
        ...mainTheme.overrides?.MuiButton?.outlined,
        // border: `1px solid ${mainTheme.palette.common.white}`,

        // '&:before': {
        //   content: `''`,
        //   position: 'absolute',
        //   top: -1,
        //   left: -1,
        //   right: -1,
        //   bottom: -1,
        //   width: 'auto',
        //   height: 'auto',
        //   background: defaultTheme.palette.text.primary,
        //   transition: `transform ${BTN_TRANSITION_TIME}s cubic-bezier(0.7, 0, 0.2, 1)`,
        //   transform: 'translateY(100%)',
        // },

        // '&:hover': {
        //   color: defaultTheme.palette.common.black,
        //   background: 'none',
        //   borderColor: fade(defaultTheme.palette.common.black, 0),

        //   '&:before': {
        //     transform: 'translateY(0)',
        //   },
        // },
      },

      outlinedPrimary: {
        ...mainTheme.overrides?.MuiButton?.outlinedPrimary,
        border: `1px solid ${defaultTheme.palette.text.primary}`,
        color: defaultTheme.palette.text.primary,
      },
    },

    MuiIconButton: {
      root: {
        ...mainTheme.overrides?.MuiIconButton?.root,
        // border: `1px solid ${fade(PALETTE.text.primary, 0.1)}`,
        color: PALETTE.text.primary,

        '&:hover': {
          borderColor: fade(PALETTE.text.primary, 0.3),
          backgroundColor: 'none',
        },
      },
    },

    MuiInputBase: {
      ...mainTheme.overrides?.MuiInputBase,
      root: {
        ...mainTheme.overrides?.MuiInputBase?.root,
        border: 'none',// `1px solid ${fade(PALETTE.text.primary, 0.5)}`,

        '&:hover, &.Mui-focused': {
          // borderColor: fade(PALETTE.text.primary, 0.7),
        },
      },
    },

    MuiSelect: {
      ...mainTheme.overrides?.MuiSelect,
      iconOutlined: {
        ...mainTheme.overrides?.MuiSelect?.iconOutlined,
        color: PALETTE.text.primary,
      },
    },
  },
} as ThemeOptions, jaJP);
