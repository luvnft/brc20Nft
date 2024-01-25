import { makeStyles, Theme } from '@material-ui/core';

export const useSelectChainStyled = makeStyles<Theme>(theme => ({
  root: {
    maxWidth: 580,
    // padding: theme.spacing(4, 2.5),
    // borderRadius: 22,
    // [theme.breakpoints.up('md')]: {
    //   padding: theme.spacing(3, 5),
    // },
  },
  h1: {
    margin: 0,
    fontSize: 40,
  },
  cardWrapper: {
    display: 'flex',
    // justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: 20,
  },
  cardItem: {
    width: '42%',
    height: 153,
    boxSizing: 'border-box',
    padding: '10px 10px',
    borderRadius: 8,
    textAlign: 'center',
    cursor: 'pointer',
    position: 'relative',
    border: `1px solid #2E2E2E`,
    display: 'flex',
    alignItems: 'center',
    margin: '10px auto',
    '&:hover': {
      backgroundColor:
        theme.palette.type === 'dark'
          ? 'rgba(243,243,243,0.05)'
          : 'rgba(0,0,0,.05)',
    },
    [theme.breakpoints.up('md')]: {
      height: 'auto'
    },
    '& svg': {
      width: '40px'
    }
  },
  textBox: {
    marginLeft: '6px',
    '&>h3': {
      lineHeight: '20.8px',
      display: 'line-block',
      marinTop: '12px',
      whiteSpace: 'nowrap',
      '& span': {
        fontSize: '12px',
        fontWeight: 500,
      },
    },
  },
  recommend: {
    position: 'absolute',
    fontSize: '14px',
    left: '50%',
    bottom: '-28px',
    padding: '4px 16px',
    backgroundColor: '#EF9610',
    height: '28px',
    borderRadius: '14px',
    transform: 'translateX(-50%)',
    color: '#fff'
  },

  dialog:{},
  dialogRoot:{},
  paper:{},
  dialogBody:{},
  header:{},
  title:{},
  close:{},
}));
