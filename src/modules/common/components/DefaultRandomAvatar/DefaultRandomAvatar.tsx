import { Avatar, AvatarProps } from '@material-ui/core';
import { addUserColorDataAsync } from 'modules/common/store/user';
import React, { useLayoutEffect, useMemo } from 'react';
import {
  useDispatch
  // , useSelector 
} from 'react-redux';
// import { RootState } from 'store';
import { useDefaultRandomAvatarStyles } from './useDefaultRandomAvatarStyles';
import useCdnUrl from 'modules/common/hooks/useCdnUrl';

const BG_PRESETS_COUNT = 19;

interface props extends AvatarProps {
  useCdn?: boolean;
  address?: string;
  imgWidth?: number;
  verified?: boolean;
  verifiedIconClasses?: string;
}
export const DefaultRandomAvatar = ({
  classes,
  useCdn = true,
  src,
  imgWidth = 160,
  address,
  verified,
  verifiedIconClasses,
  ...restProps
}: props) => {
  const styles = useDefaultRandomAvatarStyles();
  const dispatch = useDispatch();
  // const { colors } = useSelector((store: RootState) => store.user);

  const { imgSrc: cdnImgSrc } = useCdnUrl(src || '', imgWidth);

  const imgSrc = useCdn ? cdnImgSrc : src;

  const range = useMemo(() => Math.floor(Math.random() * BG_PRESETS_COUNT), []);
  useLayoutEffect(() => {
    if (address) {
      addUserColorDataAsync({ userName: address, randomColor: range })(
        dispatch,
      );
    }
  }, [address, range, dispatch]);

  // const randomBg = useMemo(() => {
  //   if (address) {
  //     return colors[address] ?? range;
  //   }
  //   return range;
  // }, [address, range, colors]);

  const withoutImg = !imgSrc;

  return (
    <div className={styles.avatarBox}>
      <Avatar
        {...restProps}
        src={withoutImg ? "https://d3sl9juju0xzg8.cloudfront.net/images/IconHeroScott_4x.png" : imgSrc}
        classes={{
          ...classes,
          // root: withoutImg ? styles[`color${randomBg}`] : '',
          // img: withoutImg ? styles.img : '',
        }}
      />
    </div>
  );
};
