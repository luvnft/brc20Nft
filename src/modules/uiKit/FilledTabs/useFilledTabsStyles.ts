import { makeStyles, Theme } from '@material-ui/core';
import { defaultTheme } from '../../themes/mainTheme';

export const useFilledTabsStyles = makeStyles<Theme>(
  theme => ({
    root: {
      minHeight: 40,
    },

    scroller: {
      zIndex: 0,
    },

    indicator: {
      zIndex: -1,
      height: '100%',
      background: defaultTheme.palette.grey[50],
      borderRadius: 40,
    },

    tab: {
      minWidth: 88,
      minHeight: 40,
      padding: theme.spacing(0.75, 2.5),
      transition: 'color 0.2s ease-in',
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1,
      textTransform: 'none',

      [theme.breakpoints.up('sm')]: {
        minWidth: 88,
      },

      '&.Mui-selected': {
        color: defaultTheme.palette.grey[50],
      },
    },

    textColorSecondary: {
      '&.Mui-selected': {
        color: defaultTheme.palette.grey[50],
      },
    },
  }),
  { index: 1 },
);
