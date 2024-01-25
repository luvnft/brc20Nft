
import {makeStyles,Theme} from '@material-ui/core/styles';
export const useDrawerStyle=makeStyles((theme:Theme)=>({
  root:{
    padding:'10px 20px 20px 20px',
    minHeight:'550px',
    width:'100%',
    background:`${theme.palette.common.white}`,
    position:'relative',
    borderRadius: '20px 20px 0px 0px',
  },
  paper:{
    overflowY:'inherit',
    borderRadius: '20px 20px 0px 0px',
  }
}))
