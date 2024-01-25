import { useBackStyles } from './useBackStyles';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { ReactComponent as BackIcon } from './assets/back.svg';

export const Back = () => {
  const classes = useBackStyles();
  const { goBack } = useHistory();
  const handleBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <div className={classes.root} onClick={handleBack}>
      <BackIcon className={classes.icon} />
    </div>
  );
};
