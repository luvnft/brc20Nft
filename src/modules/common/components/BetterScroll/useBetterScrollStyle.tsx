import {makeStyles,Theme} from '@material-ui/core/styles';

export const useBetterScrollStyle =makeStyles((theme:Theme)=>({
  root:{
    width:'100%',
    height:'calc(100vh - 270px)',
    // border:'1px solid red',
    // overflowY:'scroll',
    // '&.scroll_container::-webkit-scrollbar':{
    //   width:'10px',
    //   height:'10px',
    //   backgroundColor:'translate'
    // },
    // '&.scroll_container::-webkit-scrollbar-thumb': {
    //   /*滚动条里面小方块*/
    //   borderRadius:'10px',
    //   backgroundColor: 'rgba(0, 0, 0, 0.2)',
    //   backgroundImage: 'red'
    // },
    // '&.scroll_container::-webkit-scrollbar-track': {
    //   /*滚动条里面轨道*/
    //   boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.2)',
    //   // backgroundColor: 'translate',
    //   borderRadius: '10px'
    // }
  },
  pullUpLoading:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },
  pullDownLoading:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  }
}))
