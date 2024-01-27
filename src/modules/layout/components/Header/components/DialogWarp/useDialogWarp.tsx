import {makeStyles, Theme,fade} from '@material-ui/core';
// import dialogBorderTop from 'assets/img/public/dialogBorderTop.png';

export const useDialogWarp = makeStyles((theme: Theme) => ({
  root: {},
  dialog: {},
  dialogRoot: {},
  paper: {},
  dialogBody: {
    position: 'relative',
    border:'3px solid #000000',
    backgroundColor:fade('#ffffff',.4)
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:fade('#ffffff',.4),
    padding: '10px 20px',
    // marginTop: 10,
    position: 'relative',
    // '&::after':{
    //   content:`' '`,
    //   position:'absolute',
    //   width:'100%',
    //   height:'10px',
    //   // backgroundColor: 'red',
    //   top:'-10px',
    //   left:0,
    //   zIndex:102,
    //   backgroundImage: `url(${dialogBorderTop})`,
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize: '100% 100%'
    // },
    // '&::before':{
    //   content:`' '`,
    //   position:'absolute',
    //   width:'100%',
    //   height:'10px',
    //   backgroundColor: '#000000',
    //   top:'-10px',
    //   left:0,
    //   zIndex:101
    // }
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'DarkStar-Bold',
    fontWeight: 400,
    wordWrap: 'break-word'
  },
  close: {
    width: '26px',
    height: '26px',
    cursor:'pointer'
  },
  dialogBorder: {
    // width: '100%',
    // height: '100%',
    // position: 'absolute',
    // backgroundImage: `url(${DialogBorder})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: '100% 100%'
  },
}));
