import React from 'react';
import { Typography } from '@material-ui/core';
import { Bytes } from 'modules/common/types/unit';
import { useUploadFileStyles } from '../../useUploadFileStyles';
import LinearProgress from '@material-ui/core/LinearProgress';


export interface IInitialBlockProps {
  input: JSX.Element;
  acceptsHint?: string[];
  maxSize?: Bytes;
}

export const LoadingPreview = ({
  input,
}: IInitialBlockProps) => {
  const classes = useUploadFileStyles();
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.initialBlock}>
      <LinearProgress variant="determinate" className={classes.progress} value={progress} color={'primary'} />
      <Typography className={classes.processText}>Processing...</Typography>
      {input}
    </div>
  );
};
