import classNames from 'classnames';
import { Box } from '@material-ui/core';
import { useStepTwoCardStyles } from './StepTwoCardStyles';
import { stepTwoCardProps } from '../../../interface/homeInterface'
export const StepTwoCard = (props: stepTwoCardProps) => {
  const classes = useStepTwoCardStyles();
  return (
    <Box className={classNames(classes.root)}>
      <Box className={classNames('title')}>
        <p>{ props.title }</p>
      </Box>
      <Box className={classNames('desc')}>
        <p>{ props.desc }</p>
      </Box>
      <Box className={classNames('content')}>
        <p>{ props.content }</p>
      </Box>
    </Box>
  );
};
