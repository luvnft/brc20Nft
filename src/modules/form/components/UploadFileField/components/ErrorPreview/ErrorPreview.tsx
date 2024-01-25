import React from 'react';
import { Typography } from '@material-ui/core';
import { Bytes } from 'modules/common/types/unit';
import { useUploadFileStyles } from '../../useUploadFileStyles';
import { ReactComponent as ErrorPic } from './assets/error.svg';

export interface IInitialBlockProps {
  input: JSX.Element;
  acceptsHint?: string[];
  maxSize?: Bytes;
  errorMsg?: string;
}

export const ErrorPreview = ({
  input,
  errorMsg
}: IInitialBlockProps) => {
  const classes = useUploadFileStyles();

  return (
    <div className={classes.initialBlock}>
      <div className={classes.errorPic}>
        < ErrorPic />
      </div>
      {errorMsg ? <Typography
        variant="h5"
        align="center"
        className={classes.initialBlockText}
      >
        {errorMsg.length > 40 ? (errorMsg.slice(0, 40) + '...') : errorMsg}
      </Typography> : <Typography
        variant="h5"
        align="center"
        className={classes.initialBlockText}
      >
        Upload failed.  Please<strong> try again</strong>
      </Typography>}
      {input}
    </div>
  );
};
