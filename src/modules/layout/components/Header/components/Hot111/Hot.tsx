import {useHotStyle} from './useHotStyle';

export const Hot=()=>{

  const classes=useHotStyle();
  return (
    <div className={classes.root}>
      ssLeftColumns
    </div>
  )
}
