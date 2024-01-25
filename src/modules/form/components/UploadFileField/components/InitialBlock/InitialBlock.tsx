import React from 'react';
import { ReactComponent as InitialBlockPic } from './assets/files.svg';
import { Typography } from '@material-ui/core';
import { Bytes } from 'modules/common/types/unit';
import { useUploadFileStyles } from '../../useUploadFileStyles';

export interface IInitialBlockProps {
  input: JSX.Element;
  acceptsHint?: string[];
  maxSize?: Bytes;
  errorMsg?: string;
}

export const InitialBlock = ({
  input,
  acceptsHint,
  maxSize,
}: IInitialBlockProps) => {
  const classes = useUploadFileStyles();

  return (
    <div className={classes.initialBlock}>
      <InitialBlockPic className={classes.initialBlockPic} />
      <Typography
        variant="h5"
        align="center"
        className={classes.initialBlockText}
      >
        Drag your NFT here to start uploading, or <strong>browse files</strong>(1.5M)
      </Typography>
      {input}
    </div>
  );
};
