import { makeStyles, Theme } from '@material-ui/core/styles';

export const useMainLayoutStyles = makeStyles<Theme>(theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
  content: {
    minHeight: 'calc(100% - 30rem)',
    overflowX: 'hidden',
    '&.scroll':{
      // height: 'calc(100% - 37rem)',
    }
  },
}));
