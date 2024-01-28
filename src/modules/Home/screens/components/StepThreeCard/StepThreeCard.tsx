import classNames from 'classnames';
import { Box } from '@material-ui/core';
import { useStepThreeCardStyles } from './StepThreeCardStyles';
import { stepThreeCardProps } from '../../../interface/homeInterface'
export const StepThreeCard = (props: stepThreeCardProps) => {
  const classes = useStepThreeCardStyles();
  return (
    <Box className={classNames(classes.root)} style={{ background: props.background, height: props.height}}>
      <Box className={classNames('icon')}>
        <img src={ props.icon } alt="icon" />
      </Box>
      <Box className={classNames('desc')}>
        <p>{ props.children }</p>
      </Box>
      <Box className={classNames('indexText')}>
        <p>{ props.indexText }</p>
      </Box>
    </Box>
  );
};
