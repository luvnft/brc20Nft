import { Tabs as TabsComponent, TabsProps } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import { useTabsStyles } from './useTabsStyles';

interface ITabsProps extends TabsProps {
  indicator?: string;
}

export const Tabs = ({ indicator, className, ...restProps }: ITabsProps) => {
  const classes = useTabsStyles();

  return (
    <TabsComponent
      {...restProps}
      className={classNames(classes.root, className)}
      classes={
        {
          indicator: indicator === 'buy' ? classes.indicatorBuy :
            indicator === 'sell' ? classes.indicatorSell :
              indicator === 'needBottom' ? classes.indicatorNeedBottom :
              indicator === 'needBottom3' ? classes.indicatorNeedBottom3 :
                classes.indicator,
        }
      }
      variant='scrollable'
    />
  );
};
