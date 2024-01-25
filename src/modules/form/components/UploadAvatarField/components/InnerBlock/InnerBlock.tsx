import {
  IconButton,
  Typography
} from '@material-ui/core';
import { PencilIcon } from 'modules/common/components/Icons/PencilIcon';
import { useUploadAvatarFieldStyles } from '../../useUploadAvatarFieldStyles';
import Files from '../../assets/files.svg';

export interface IInitialBlock {
  avatar: string;
  value: string;
  input: JSX.Element;
  inputRef: any;
  handleReset: () => void;
  textHide:boolean
}

export const InnerBlock = ({
  avatar,
  input,
  textHide = true
}: IInitialBlock) => {
  const classes = useUploadAvatarFieldStyles();

  return (
    <div className={classes.innerBlock}>
      <div className={classes.avatarWrap}>
        {/* <AvatarComponent src={avatar} className={classes.avatar} /> */}
        {avatar ? <img src={avatar} alt="" className={classes.avatar} /> :
          <div className={classes.initialBlock}>
            <img src={Files} alt="" className={classes.initialBlockPic} />
            {
              textHide && <>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.initialBlockText}
                >
                  Drag your NFT here to start uploading, or <strong>browse files</strong>
                </Typography>
              </>
            }

          </div>
        }
        <IconButton className={classes.editButton}>
          {input}
          <PencilIcon />
        </IconButton>
      </div>
    </div>
  );
};
