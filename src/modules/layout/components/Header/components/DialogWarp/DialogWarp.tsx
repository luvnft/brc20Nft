import React from "react";
import {useDialogWarp} from './useDialogWarp';
import {Box, Dialog} from '@material-ui/core';
import classNames from 'classnames';
// import ClosePng from 'assets/img/public/dialogClose.png';

interface DialogWarpProps {
  visibility: boolean;
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactElement;
  title:string
}

export const DialogWarp = ({
                             visibility,
                             setVisibility,
                             children,
                             title
                           }: DialogWarpProps) => {

  const classes = useDialogWarp();
  return (
    <Dialog
      open={visibility}
      PaperProps={{
        elevation: 0,
      }}
      maxWidth="sm"
      className={classNames(classes.dialog)}
      classes={{
        root: classes.dialogRoot,
        paper: classes.paper,
      }
      }
    >
      <Box className={classes.dialogBody}>
        <Box className={classes.header}>
          <div></div>
          <Box className={classes.title}>
            {title}
          </Box>
          {/* <img className={classes.close} onClick={() => setVisibility(false)} src={ClosePng} alt=''/> */}
        </Box>
        {children}

      </Box>
    </Dialog>
  )
}
