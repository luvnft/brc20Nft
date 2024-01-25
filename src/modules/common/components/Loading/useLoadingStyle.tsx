import { makeStyles, Theme } from '@material-ui/core';

export const useLoadingStyle = makeStyles<Theme, { size?: number }>((theme: Theme) => ({
  root: {
    width: '100%',
    // height:'200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // width: ({ size }) => size ?? DEFAULT_SIZE,
    height: ({ size }) => size === 100 ? '100%' : '200px',
  },
  loading: {
    width: '60px',
    height: '60px',
  },
}));
