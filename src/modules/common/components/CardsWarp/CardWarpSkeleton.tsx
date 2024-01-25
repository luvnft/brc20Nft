import {
  // Box,
  Card,
  // CardContent
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import classNames from 'classnames';
import React from 'react';
import { useCardWarpSkeletonStyles } from './useCardWarpSkeletonStyles';

interface IProductCardSkeletonProps {
  className?: string;
}

export const CardWarpSkeleton = ({
  className,
}: IProductCardSkeletonProps) => {
  const classes = useCardWarpSkeletonStyles();

  return (
    <Card
      className={classNames(className, classes.root)}
      variant="outlined"
    >
      <Skeleton className={classes.media} variant="rect" animation="wave" />

      {/*<CardContent>*/}
        {/*<Box mb={2} className={classes.skillList}>*/}
        {/*  <Skeleton className={classes.skill} height={40} width={40} variant="rect" animation="wave" />*/}
        {/*  <Skeleton className={classes.skill} height={40} width={40} variant="rect" animation="wave" />*/}
        {/*  <Skeleton className={classes.skill} height={40} width={40} variant="rect" animation="wave" />*/}
        {/*  <Skeleton className={classes.skill} height={40} width={40} variant="rect" animation="wave" />*/}
        {/*  <Skeleton className={classes.skill} height={40} width={40} variant="rect" animation="wave" />*/}
        {/*</Box>*/}
        {/*<div className={classes.infoContainer}>*/}
        {/*  <Skeleton variant="text" width={65} animation="wave" />*/}
        {/*  <Skeleton variant="text" width={50} animation="wave" />*/}
        {/*</div>*/}
      {/*</CardContent>*/}
    </Card>
  );
};
