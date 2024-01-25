import { Tab as TabComponent, TabProps } from '@material-ui/core';
import React from 'react';
import { useTabsStyles } from './useTabsStyles';

interface ITabProps extends TabProps {
  count?: number;
  type?: number | string;
  className?: string
}

export const Tab = ({ label, count, type, className, ...restProps }: ITabProps) => {
  const classes = useTabsStyles();

  return (
    <TabComponent
      className={className}
      {...restProps}
      classes={{
        root: classes.tab,
        wrapper: classes.tabWrapper,
        selected: type === 1 ? classes.notNeedBGSelected :
          type === 2 ? classes.tradeSelected :
            type === 'buy' ? classes.buySelected :
              type === 'sell' ? classes.sellSelected :
                classes.selected,
      }
      }
      label={
        <>
          {label}
          {typeof count !== 'undefined' && (
            <span className={classes.tabCount}>{count}</span>
          )}
        </>
      }
    />
  );
};
