import {makeStyles, Theme} from '@material-ui/core';

export const useFooterStyle = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    height: '30rem',
    backgroundColor: '#333333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      padding:'40px 0'
    },
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: '',
    color: '#7D7D7D',
    fontSize: 16,
    fontWeight: 400,
    wordWrap: 'break-word',
    '& p': {
      paddingBottom: '5px',
      cursor: 'pointer',
      '&:hover': {
        color: '#8C87FF',
      },
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
    },
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  itemFlex: {
    display: 'flex',
    flexDirection: 'row',
  },
  openBox: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      width: 35,
      height: 32,
      cursor: 'pointer',
      marginRight: '10px',
    },
    [theme.breakpoints.down('md')]: {
      '& img': {
        width: 25,
        height: 22,
      },
    },
  },
  brcex: {
    color: '#CECECE',
    fontSize: 16,
    fontFamily: 'IBMPlexMono-Medium',
    fontWeight: 400,
    wordWrap: 'break-word',
    paddingTop: '10px',
  },
  item: {
    marginLeft: '100px',
    fontFamily: 'IBMPlexMono-Medium',
    [theme.breakpoints.down('md')]: {
      marginLeft: '0',
      marginRight: '40px',
      marginBottom:'40px'
    },
  },
  first: {
    color: '#F1F1F1',
  },
}));
