import { Theme } from '@material-ui/core';
import { StyleRules } from '@material-ui/styles';

export const useDrawerCloseStyle = (theme: Theme): StyleRules => ({
  headerClose: {
    position:'absolute',
    left:'50%',
    transform:'translateX(-50%)',
    top:'-15px',
    width:'30px',
    height:'30px',
    display:'flex',
    background:`${theme.palette.common.white}`,
    borderRadius:'50%',
    border:'1px solid #BDBDBD'
  },
  closeImg: {
    width: '12px',
    height: '12px',
    margin:'auto',
    cursor: 'pointer',
  },
});
