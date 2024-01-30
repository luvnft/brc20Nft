import { Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/styles';

export const styles = (theme: Theme): StyleRules => ({
  headerClose: {
    height: '6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
  },
  closeImg: {
    height: '3.6rem',
    cursor: 'pointer',
  },
});
