
import { makeStyles, Theme } from '@material-ui/core';
const stepOnecardStyle = {
  padding: '4rem',
  borderRadius: '4rem',
  border: '1px rgba(255, 255, 255, 0.10) solid',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '2rem',
  display: 'inline-flex',
}
export const useStepOneStyles = makeStyles<Theme>(theme => ({
  stepOne: {
    position: 'relative',
    zIndex: 1,
    padding: '0 15rem',
    '& .stepOne-wrap': {
      width: '100%',
      height: '77rem',
      background: '#1A1B31',
      borderRadius: '4rem',
      padding: '6rem 7rem 8.2rem 7rem',
    },
    '& .stepOne-wrap-card': {
      display: 'flex',
      gap: '4rem',
      marginTop: '6.4rem',
      '& img': {
        width: '6rem',
        height: '6rem',
      },
      '& .stepOne-wrap-card-left': {
        width: '28rem',
        height: '39rem',
        ...stepOnecardStyle,
      },
      '& .stepOne-wrap-card-center': {
        flex: 1,
        height: '39rem',
        ...stepOnecardStyle,
      },
      '& .stepOne-wrap-card-right': {
        width: '42rem',
        height: '39rem',
        ...stepOnecardStyle,
      },
    }
  },
}));
