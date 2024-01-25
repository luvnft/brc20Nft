import { Container, Typography } from '@material-ui/core';
import { useAccount } from 'modules/account/hooks/useAccount';
import { t } from 'modules/i18n/utils/intl';
import { Button } from 'modules/uiKit/Button';
import { Section } from 'modules/uiKit/Section';
import React from 'react';
import { useConnectWalletStyles } from './useConnectWalletStyles';
import classNames from 'classnames';

export const ConnectWallet = () => {
  const classes = useConnectWalletStyles();

  const { handleConnect, loading } = useAccount();

  return (
    <Section className={classes.root}>
      <Container maxWidth="sm">
        <Typography variant="h1" className={classes.caption}>
          {t('connect-wallet.placeholder.title')}
        </Typography>
        <Typography variant="body1" className={classes.text}>
          {t('connect-wallet.placeholder.description')}
        </Typography>
        <Button
          onClick={handleConnect}
          className={classNames('default', classes.connectBtn)}
          loading={loading}
        >
          {t('connect-wallet.placeholder.title')}
        </Button>
      </Container>
    </Section>
  );
};
