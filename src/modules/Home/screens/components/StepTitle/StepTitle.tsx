import classNames from 'classnames';
import { Box } from '@material-ui/core';
import { useStepTitleStyles } from './StepTitleStyles';
import { stepTitleProps } from '../../../interface/homeInterface'
export const StepTitle = (props: stepTitleProps) => {
  const classes = useStepTitleStyles();
  return (
    <Box className={classNames(classes.root)}>
      <Box className={classNames('stepPg')}>
        <p>{ props.number }</p>
      </Box>
      <p className={classNames(classes.stepDesc)}  dangerouslySetInnerHTML={{__html: props.title}}></p>
    </Box>
  );
};
