// import {useQRCodeStyle} from './useQRCodeStyle';
import QRCode from 'qrcode.react';

// import LogoPng from 'assets/img/logo/logo.png';

interface QRCodeCompProps {
  size: number;
  value?: string | any
}

export const QRCodeComp = ({ size = 70, value }: QRCodeCompProps) => {
  // const classes=useQRCodeStyle();
  return (
    <QRCode
      id={value}
      renderAs='svg'
      value={value}
      // level='M'
      size={size} // 二维码的大小
      fgColor='#000000' // 二维码的颜色
      style={
        {
          margin: 'auto',
          border: '1px solid #ffffff',
        }
      }
      // imageSettings={// 二维码中间的logo图片
      //   {
      //   src: LogoPng,
      //   height: 20,
      //   width: 20,
      //   excavate: true, // 中间图片所在的位置是否镂空
      //   }
      // }
    />
  );
};
