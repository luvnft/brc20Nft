import { makeStyles, Theme } from '@material-ui/core/styles';
// import InputBg from 'assets/img/header/input-bg.png';
// import InputBg from 'assets/img/header/Subtract.png';
import SearchLeft from 'assets/img/header/searchLeft.png';
import SearchRight from 'assets/img/header/searchRight.png';
export const useFilterSearchStyle = makeStyles<Theme>(theme => ({
  root: {
    width: '100%',
    [theme.breakpoints.up('xs')]: {},
    [theme.breakpoints.up('sm')]: {},
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.up('lg')]: {},
    [theme.breakpoints.up('xl')]: {},
    [theme.breakpoints.up('HD')]: {},
    [theme.breakpoints.up('WXGAPlus')]: {},
  },
  searchBox: {
    display: 'flex',
    position: 'relative',
    width: '39rem',
    height: '5.4rem',
    '&:after':{
      content:`' '`,
      position:'absolute',
      height:'100%',
      width:'2rem',
      top:0,
      left:'-1.2rem',
      backgroundImage: `url(${SearchLeft})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    },
    '&:before':{
      content:`' '`,
      position:'absolute',
      height:'100%',
      width:'1.2rem',
      top:0,
      right:'-1.2rem',
      backgroundImage: `url(${SearchRight})`,
      backgroundSize: '100% 100%',
      backgroundRepeat: 'no-repeat',
    }
  },
  debounceInput: {
    width: '100%',
    height: '100%',
    fontSize: '1.4rem',
    background: '#8884DB',
    border: 'none',
    color: '#000000',
    fontFamily:'TTF-Pixer-Regular-ttf',
    padding: '0 40px',
    '&::placeholder':{
      color: '#010101',
    },
    '&:focus': {
      outline: 'none',
    },

  },

  ioMdSearch: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '10px',
    fontSize: '20px',
    width: '20px',
    height: '20px',
    cursor: 'pointer',
  },
  mdClose: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '10px',
    fontSize: '20px',
    opacity: .5,
    cursor:'pointer'
  },
  contentBody: {
    zIndex: 999,
    position: 'absolute',
    top: 'calc(100% + 6px)',
    left: '0',
    // transform: 'translateX(-50%)',
    width: '620px',
    // minHeight: '300px',
    background: '#1A1A1A',
    borderRadius: '4px',
    border: '1px solid #2E2E2E',
    opacity: 0,
    // padding: '20px',
    pointerEvents: 'none',
    transition: 'all 1s',
    '&.contentBody': {
      opacity: 1,
      pointerEvents: 'auto',
    },
  },
  loading: {
    border: '3px solid #2E2E2E',
    borderTop: `3px solid ${theme.palette.grey[500]}`,
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    margin: '20px auto',
    animationName: '$LoadingRingKeyframes',
    animationDuration: '2s',
    animationDelay: '0s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  },
  '@keyframes LoadingRingKeyframes': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
  hotTitle: {
    fontSize: '14px',
    fontFamily: 'PingFangSC-Regular, PingFang SC',
    fontWeight: 400,
    color: '#EAEAEA',
    padding: '0 0 10px 0',
    textIndent: '20px',
  },
  none:{
    display:'none'
  }
}));
