import { makeStyles, Theme } from '@material-ui/core';


export const useUserSelectStyle = makeStyles((theme: Theme) => ({
  root: {

  },
  link: {
    minWidth: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '39px',
    fontSize: '12px',
    fontFamily: 'PingFangSC-Regular, PingFang SC',
    fontWeight: 400,
    color: `${theme.palette.grey[500]}`,
    borderRadius: '0',
    position: 'relative',
    '&:hover': {
      background: `${theme.palette.grey['A400']}`,
      color: `${theme.palette.grey[50]}`,

    },
  },
  activeLink: {
    background: `${theme.palette.grey['A400']}`,
    color: `${theme.palette.grey[50]}`,
  },
}));
