import {useLoadingStyle} from './useLoadingStyle';
import Loading60 from 'assets/img/loading/loading60.gif';

interface LoadingProps{
  size?:number
}
export const Loading=({
                        size
                      }:LoadingProps)=>{

  const classes=useLoadingStyle({ size });
  return (
    <div className={classes.root}>
      <img className={classes.loading} src={Loading60} alt='' />
    </div>
  )
}
