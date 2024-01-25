import { useGoBackStyle } from './useGoBackStyle';
import { useCallback } from 'react';
import { useHistory } from 'react-router';
import { ReactComponent as BackIcon } from './assets/goBack.svg';

export const GoBack = () => {
  const classes = useGoBackStyle();
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
