import { Box, Fade } from '@material-ui/core';
import React, { ReactNode } from 'react';
import {useTabPanelStyle} from './useTabPanelStyle';

interface ITabPanelProps {
  children?: ReactNode;
  index: any;
  value: any;
  className?:string
}

export const TabPanel = ({ children, className,value, index }: ITabPanelProps) => {
  const isActive = value === index;
  const classes=useTabPanelStyle();

  return (
    <div role="tabpanel" hidden={!isActive}
        className={className}
    >
      {isActive && (
        <Fade in={isActive}>
          <Box className={classes.root}>{children}</Box>
        </Fade>
      )}
    </div>
  );
};
