import { FormHelperText, InputLabel, TextFieldProps } from '@material-ui/core';
import React, { useCallback, useMemo, useRef, useState, useEffect, useImperativeHandle, MutableRefObject } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { getErrorText } from 'modules/form/utils/getErrorText';
// import { readImage } from 'modules/form/utils/readImage';
import {getBase64} from 'modules/form/utils/getBase64';
import { useUploadFileStyles } from './useUploadFileStyles';
import {
  IMAGE_FILES_MIMES,
  VIDEO_FILES_MIMES,
  AUDIO_FILES_MIMES,
} from 'modules/common/utils/mimeTypes';
import { LoadingPreview } from './components/LoadingPreview';
import { ErrorPreview } from './components/ErrorPreview';
import { LocalPreview } from './components/LocalPreview';
import { IInitialBlockProps, InitialBlock } from './components/InitialBlock';
import { FilePreview, IFilePreviewProps } from './components/FilePreview';
import { IImagePreviewProps, ImagePreview } from './components/ImagePreview';
import { IVideoPreviewProps, VideoPreview } from './components/VideoPreview';
import { AudioPreview, IAudioPreviewProps } from './components/AudioPreview';
import { IUploadedWrapProps, UploadedWrap } from './components/UploadedWrap';
import { Bytes } from 'modules/common/types/unit';
import { dataUrlToFile } from '../../utils/dataUrlConvert';
import classNames from 'classnames';


// import {uploadAsyncImg} from 'modules/form/components/UploadFileField/profile';

// TODO: need to fix 'any' typings (here and in the child components)

const MAX_SIZE: Bytes = 31457280;

interface IInitialBlock extends IInitialBlockProps {
  InitialBlockComponent: any;
}
const renderInitialBlock = ({
  InitialBlockComponent,
  input,
  acceptsHint,
  maxSize,
}: IInitialBlock) => {
  if (InitialBlockComponent) {
    return (
      <InitialBlockComponent
        input={input}
        acceptsHint={acceptsHint}
        maxSize={maxSize}
      />
    );
  }
  return (
    <InitialBlock input={input} acceptsHint={acceptsHint} maxSize={maxSize} />
  );
};

const renderLoadingPreviewBlock = ({
  InitialBlockComponent,
  input,
  acceptsHint,
  maxSize,
}: IInitialBlock) => {
  if (InitialBlockComponent) {
    return (
      <InitialBlockComponent
        input={input}
        acceptsHint={acceptsHint}
        maxSize={maxSize}
      />
    );
  }
  return (
    <LoadingPreview input={input} acceptsHint={acceptsHint} maxSize={maxSize} />
  );
};
const renderErrorPreviewBlock = ({
  InitialBlockComponent,
  input,
  acceptsHint,
  maxSize,
  errorMsg
}: IInitialBlock) => {
  if (InitialBlockComponent) {
    return (
      <InitialBlockComponent
        input={input}
        acceptsHint={acceptsHint}
        maxSize={maxSize}
      />
    );
  }
  return (
    <ErrorPreview input={input} acceptsHint={acceptsHint} maxSize={maxSize} errorMsg={errorMsg} />
  );
};

interface IUpLocalWrap extends IInitialBlock {
  handleReset: () => void;
  filesImg: string;
}

const renderLocalPreviewBlock = ({
  InitialBlockComponent,
  input,
  acceptsHint,
  maxSize,
  handleReset,
  filesImg
}: IUpLocalWrap) => {
  if (InitialBlockComponent) {
    return (
      <InitialBlockComponent
        input={input}
        acceptsHint={acceptsHint}
        maxSize={maxSize}
      />
    );
  }
  return (
    <LocalPreview input={input} acceptsHint={acceptsHint} maxSize={maxSize} handleReset={handleReset} filesImg={filesImg} />
  );
};


interface IUploadedWrap extends IUploadedWrapProps {
  UploadedWrapComponent: any;
}
const renderUploadedWrapPreview = ({
  UploadedWrapComponent,
  input,
  cover,
  handleReset,
}: IUploadedWrap): any => {
  const UploadedWrapper = UploadedWrapComponent ?? UploadedWrap;
  return (
    <UploadedWrapper input={input} cover={cover} handleReset={handleReset} />
  );
};

interface IFilePreview extends IFilePreviewProps {
  FilePreviewComponent: any;
}
const renderFilePreview = ({
  FilePreviewComponent,
  fileName,
  fileSize,
}: IFilePreview) => {
  const FileComponent = FilePreviewComponent ?? FilePreview;
  return <FileComponent fileName={fileName} fileSize={fileSize} />;
};

interface IImagePreview extends IImagePreviewProps {
  ImagePreviewComponent: any;
}
const renderImagePreview = ({
  ImagePreviewComponent,
  image,
  fitView,
  cropper,
  cropHandle,
  CropperPreviewComponent,
  cropperAspect,
  needShowCropper,
}: IImagePreview) => {
  const ImageComponent = ImagePreviewComponent ?? ImagePreview;
  return (
    <ImageComponent
      image={image}
      fitView={fitView}
      cropper={cropper}
      cropHandle={cropHandle}
      CropperPreviewComponent={CropperPreviewComponent}
      cropperAspect={cropperAspect}
      needShowCropper={needShowCropper}
    />
  );
};

interface IVideoPreview extends IVideoPreviewProps {
  VideoPreviewComponent: any;
}
const renderVideoPreview = ({ VideoPreviewComponent, file }: IVideoPreview) => {
  const VideoComponent = VideoPreviewComponent ?? VideoPreview;
  return <VideoComponent file={file} />;
};

interface IAudioPreview extends IAudioPreviewProps {
  AudioPreviewComponent: any;
}
const renderAudioPreview = ({
  AudioPreviewComponent,
  fileName,
  fileSize,
}: IAudioPreview) => {
  const AudioComponent = AudioPreviewComponent ?? AudioPreview;
  return <AudioComponent fileName={fileName} fileSize={fileSize} />;
};
export type eventMethod = {
  upLoad: () => void,
};
interface IFieldProps extends FieldRenderProps<string> {
  disabled?: boolean;
  maxSize?: Bytes;
  className?: string;
  acceptsHint?: string[];
  accepts?: string[];
  fitView?: boolean;
  label?: string;
  cropper?: boolean;
  cropperAspect?: number;
  InitialBlockComponent?: JSX.Element;
  FileUploadedComponent?: JSX.Element;
  ImagePreviewComponent?: JSX.Element;
  VideoPreviewComponent?: JSX.Element;
  AudioPreviewComponent?: JSX.Element;
  FilePreviewComponent?: JSX.Element;
  setFilesImg: React.Dispatch<React.SetStateAction<string>>;
  filesImg?: string;
  emilFiles?: any;
  event?: MutableRefObject<eventMethod>,
}

export const UploadFileField = ({
  input: { name, onChange, value },
  meta,
  disabled = false,
  maxSize = MAX_SIZE,
  acceptsHint,
  accepts = [],
  fitView = false,
  className,
  label,
  cropper = false,
  cropperAspect = 1,
  InitialBlockComponent,
  UploadedWrapComponent,
  ImagePreviewComponent,
  VideoPreviewComponent,
  AudioPreviewComponent,
  FilePreviewComponent,
  CropperPreviewComponent,
  setFilesImg,
  filesImg,
  emilFiles,
  eventMethod
}: IFieldProps & TextFieldProps) => {
  const classes = useUploadFileStyles();
  const [cover, setCover] = useState<null | JSX.Element>(null);
  const [step, setStep] = useState('beforeUpload');
  const [errorMsg, setErrorMsg] = useState('');


  useImperativeHandle(eventMethod, () => ({
    upLoad: () => {
      handleReset();
    },
  }));

  useEffect(() => {
    // console.log(filesImg);
    if (filesImg) {
      // console.log('local');
      setStep('local')
    }
  }, [filesImg]);

  let needShowCropper = useRef<boolean>(true);

  const renderPreview = useCallback(
    async file => {
      let filePreview: string | JSX.Element;
      if (IMAGE_FILES_MIMES.includes(file.type)) {
        const cropHandle = (img: string) => {
          const file = dataUrlToFile(img, 'cropped-baner-introduce.png');
          needShowCropper.current = false;
          renderPreview(file).catch(error => console.error(error));
        };
        let { image } = await getBase64(file);
        filePreview = renderImagePreview({
          ImagePreviewComponent,
          image,
          fitView,
          cropper,
          cropHandle,
          CropperPreviewComponent,
          cropperAspect,
          needShowCropper: needShowCropper.current,
        });
      } else if (VIDEO_FILES_MIMES.includes(file.type)) {
        filePreview = renderVideoPreview({
          VideoPreviewComponent,
          file,
        });
      } else if (AUDIO_FILES_MIMES.includes(file.type)) {
        filePreview = renderAudioPreview({
          AudioPreviewComponent,
          fileName: file.name,
          fileSize: file.size,
        });
      } else {
        filePreview = renderFilePreview({
          FilePreviewComponent,
          fileName: file.name,
          fileSize: file.size,
        });
      }
      setCover(filePreview);
      onChange(file);
      needShowCropper.current = true;
    },
    [
      onChange,
      fitView,
      AudioPreviewComponent,
      FilePreviewComponent,
      ImagePreviewComponent,
      VideoPreviewComponent,
      CropperPreviewComponent,
      cropper,
      cropperAspect,
      needShowCropper,
    ],
  );

  const handleReset = useCallback(() => {
    setCover(null);
    onChange(undefined);
    setStep('beforeUpload');
    setFilesImg('');
  }, [onChange,setFilesImg]);

  const handleChange = useCallback(
    async (
      event: React.ChangeEvent<HTMLInputElement> & {
        dataTransfer: DataTransfer;
      },
    ) => {
      event.preventDefault();
      const files = (() => {
        // console.log('--------', event)
        if (event.dataTransfer) {
          return event.dataTransfer.files;
        } else if (event.target) {
          return event.target.files;
        }
      })();

      // const file = new FormData();
      // file.append('file', event);
      // TODO new add
      if (files && files.length){
        // if (IMAGE_FILES_MIMES.includes(files[0].type)) {
          let { image } = await getBase64(files[0]);
          setFilesImg(image)
        // }
        setStep('loading');
        emilFiles(files);
        renderPreview(files[0]).catch(error => console.error(error));
        setStep('success');

      } else {
          setErrorMsg('');
          setStep('error')
      }

      if (files) {
        // setStep('loading');
        // const file = new FormData();
        // file.append('file', files[0]);
        try {
          // const res: any = await uploadAsyncImg(file);
          // if (res.code === 200) {
          //   setFilesImg(res.data.imageUri);
          //   renderPreview(files[0]).catch(error => console.error(error));
          //   setStep('success');
          // } else if (res.indexOf('https://') === 0) {
          //   setFilesImg(res);
          //   renderPreview(files[0]).catch(error => console.error(error));
          //   setStep('success');
          // } else {
          //   console.log(res)
          //   setErrorMsg(res.msg || '');
          //   setStep('error')
          // }
        } catch (error) {
          setStep('error')
          // console.log('error: ', error);
        }
      } else {
        onChange(undefined);
      }
    },
    [emilFiles, onChange, renderPreview, setFilesImg],
  );

  const input = useMemo(() => {
    return (
      <input
        type="file"
        accept={accepts.join(',')}
        name={name}
        onChange={handleChange}
        className={classes.input}
      />
    );
  }, [accepts, name, handleChange, classes.input]);

  return (
    <div className={className}>
      <div className={classNames(classes.root, disabled && classes.disabled)}>
        {label && <InputLabel shrink>{label}</InputLabel>}
        <div className={classes.container}>
          {(value && step === 'success')
            ? renderUploadedWrapPreview({
              UploadedWrapComponent,
              input,
              cover,
              handleReset,
            }) : (filesImg && step === 'local') ? renderLocalPreviewBlock({
              InitialBlockComponent,
              input,
              acceptsHint,
              maxSize,
              handleReset,
              filesImg
            }) : step === 'beforeUpload' ? renderInitialBlock({
              InitialBlockComponent,
              input,
              acceptsHint,
              maxSize,
            }) : step === 'loading' ? renderLoadingPreviewBlock({
              InitialBlockComponent,
              input,
              acceptsHint,
              maxSize,
            }) : step === 'error' && renderErrorPreviewBlock({
              InitialBlockComponent,
              input,
              acceptsHint,
              maxSize,
              errorMsg
            }
            )}
        </div>
      </div>
      <FormHelperText error={true}>{getErrorText(meta)}</FormHelperText>
    </div>
  );
};
