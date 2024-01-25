import { useSnackbarStyle } from './useSnackbarStyle';
import { Box } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Error from 'assets/img/status/error.svg';
import Success from 'assets/img/status/success.svg';
import Info from 'assets/img/status/info.svg';
import Warning from 'assets/img/status/info.svg';
import CloseAlert from 'assets/img/public/closeAlert.png';
import React from 'react';
export type Color = 'success' | 'info' | 'warning' | 'error';
export const SnackbarDialog = ({
                                 isOpen,
                                 setOpen,
                                 msg,
                                 severity,
                                 duration,
                               }: {
  isOpen: boolean;
  msg: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  severity?: Color;//'success' | 'info' | 'warning' | 'error'
  duration?: number;
}) => {
  const classes = useSnackbarStyle();

  function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant='filled' {...props} classes={
      {
        root: classes.muiAlertRoot,
        message: classes.muiAlertMessage,
      }
    } />;
  }

  const handleCloseSnackbar = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
      <Snackbar
        open={isOpen}
        autoHideDuration={duration || 3000000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }
        }
        classes={{
          root: classes.snackbarRoot,
        }
        }
      >
        <Alert severity={severity || 'info'}>
          <Box className={classes.msg}>

            <img onClick={handleCloseSnackbar} className={classes.closeAlert} src={CloseAlert} alt='' />
            <Box className={classes.alertBody}>
              <Box className={classes.statusBox}>
                {
                  severity && <img className={classes.statueImg} src={
                    severity === 'success' ? Success :
                      severity === 'error' ? Error :
                        severity === 'warning' ? Warning : Info
                  } alt='' />
                }

                <Box className={classes.messageText}>{msg}</Box>
              </Box>
            </Box>
          </Box>
        </Alert>
      </Snackbar>
    </Box>
  );
};
