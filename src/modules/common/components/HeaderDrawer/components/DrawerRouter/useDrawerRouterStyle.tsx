import { makeStyles, Theme } from '@material-ui/core';

export const useDrawerRouterStyle = makeStyles<Theme>((theme: Theme) => ({
  root: {
    padding: '20px 0',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
    cursor: 'pointer',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Pretendard',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '16px',
    color: theme.palette.common.white,
    paddingLeft: '10px',
  },
  ingWrap: {
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border:`1px solid ${theme.palette.grey[50]}`
  },
  profileImg: {
    width: '14px',
    height: '14px',
  },
  watchlistImg: {
    width: '16px',
    height: '13px',
  },
  settingImg: {
    width: '20px',
    height: '20px',
  },
  arrowImg: {
    width: '8px',
    height: '15px',
  },
}));

