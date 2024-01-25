import React from 'react';
import { Bytes } from 'modules/common/types/unit';
import { useUploadFileStyles } from '../../useUploadFileStyles';
import { IconButton, Tooltip } from '@material-ui/core';
import { t } from 'modules/i18n/utils/intl';
import { CloseIcon } from 'modules/common/components/Icons/CloseIcon';
import classNames from 'classnames';

export interface IInitialBlockProps {
  input: JSX.Element;
  acceptsHint?: string[];
  maxSize?: Bytes;
  handleReset: () => void;
  filesImg: string;
}

export const LocalPreview = ({
  input,
  handleReset,
  filesImg
}: IInitialBlockProps) => {
  const classes = useUploadFileStyles();

  return (
    <div className={classes.uploadedWrap}>
      <div
        className={classNames(
          classes.previewContainer,
          classes.previewContainerImage,
        )}
      >
        <div
          className={classNames(
            classes.previewUploadedImage
          )}
          style={
            { backgroundImage: `url(${filesImg})` }
          }
        />
      </div>
      <Tooltip title={t('common.reset')} className={classes.clearBtn} arrow>
        <IconButton onClick={handleReset} >
          <CloseIcon />
        </IconButton>
      </Tooltip>
      {input}
    </div>
  );
};
