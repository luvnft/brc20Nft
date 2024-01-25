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
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  },
});
