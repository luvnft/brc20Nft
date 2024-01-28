import classNames from 'classnames';
import { Box } from '@material-ui/core';
import { useStepFourCardStyles } from './StepFourCardStyles';
import { stepFourCardProps } from '../../../interface/homeInterface'
export const StepFourCard = (props: stepFourCardProps) => {
  const classes = useStepFourCardStyles();
  return (
    <Box className={classNames(classes.root)}>
      <Box className={classNames('img')}>
        <img src={ props.img } alt="img" />
      </Box>
      <Box className={classNames('desc')}>
        <p>{ props.desc }</p>
      </Box>
    </Box>
  );
};
