import { useNoDataStyle } from './useNoDataStyle';
import { Box } from '@material-ui/core';
import noDataPng from 'assets/img/trade/notdata.jpg';
interface NoDataCompInterface {
  text?: string
}
export const NoDataComp = (
  {
    text
  }: NoDataCompInterface,
) => {
  const classes = useNoDataStyle();
  return (
    <Box className={classes.root}>
      {
        text ? text : <img className={classes.noData} src={noDataPng} alt='' />
      }
    </Box>
  );

};
