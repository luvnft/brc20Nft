import { makeStyles, Theme } from '@material-ui/core';

export const useCardWarpSkeletonStyles = makeStyles<Theme>(theme => ({
  media: {
    display: 'block',
    height: '100%',
    width:'100%',
    borderRadius: '0',
    flexDirection: 'column',
    background: '#262626',
    '&:hover $likeSite': {
      opacity: 1,
    },
    '&:before': {
      content: `''`,
      display: 'block',
      // paddingBottom: '100%',
    },
  },
  root: {
    border: 'none',
    height: '100%',
    width:'100%',
    borderRadius:'4px'
  },
  title: {
    height: 26
  },
  skill: {
    margin: '5px 4px 0',
    display: 'inline-block'
  },
  skillList: {
    textAlign: 'center',
  },
  infoContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}));
