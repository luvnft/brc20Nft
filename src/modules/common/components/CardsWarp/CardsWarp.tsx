import { Grid } from '@material-ui/core';
import React, { ReactNode, useCallback } from 'react';
import { uid } from 'react-uid';
import { CardWarpSkeleton } from './CardWarpSkeleton';
import { useCardWarpStyles } from './useCardWarpStyles';
import { getPercentage } from 'modules/common/utils/styleUtils';

interface IProductCardsProps {
  className?: string;
  children?: ReactNode;
  isLoading?: boolean;
  skeletonsCount?: number;
  layoutNum?: number;
}

export const CardsWarp = ({
                                  children,
                                  isLoading,
                                  skeletonsCount = 2,
                                  layoutNum = 2,

                                }: IProductCardsProps) => {
  const classes = useCardWarpStyles();
  const modifyChildren = useCallback(
    (child: any) => {
      if (child) {
        return (
          <Grid item xs={12} sm={6} lg={4} xl={3} className={classes.col}
                style={{
                  width: getPercentage(1, layoutNum||3),
                  maxWidth: getPercentage(1, layoutNum||3)
                }
                }>
            {child}
          </Grid>
        );
      }
    },
    [classes.col, layoutNum],
  );

  const renderedSkeletons = Array(skeletonsCount)
    .fill(0)
    .map((_, i) => <CardWarpSkeleton key={uid(i)} />);

  return (
    <Grid container className={classes.row}>
      {React.Children.map(isLoading ? renderedSkeletons : children, child =>
        modifyChildren(child),
      )}
    </Grid>
  );
};
