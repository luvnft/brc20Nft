import { Box, Typography } from '@material-ui/core';
import { t } from 'modules/i18n/utils/intl';
import React from 'react';

interface INotSupportChainProps {

}

// eslint-disable-next-line no-empty-pattern
export const NotSupportChain = ({

}: INotSupportChainProps) => {

  return (
    <Box mb={10} mt={10}>
      <Typography variant="h3" align="center" color="textSecondary">
        {t('not-support-chain.title')}
      </Typography>
    </Box>
  );
};
