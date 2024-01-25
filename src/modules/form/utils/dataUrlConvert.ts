export const dataUrlToFile = (dataUrl: string, filename: string) => {
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)![1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};


//图片压缩
/**
 * 图片压缩（利用canvas）
 * @param  path     base64图片
 * @param  obj      压缩配置quality，不传则按比例压缩，默认0.5
 * @param type
 * @param  callback  回调函数
 */
export const dealImageCompression = (path:string, obj:any,type:string,callback:any)  =>{
  let img = new Image();
  img.src = path;

  img.onload = function () {
    // 默认按比例压缩
    let w = img.width,
      h = img.height,
      scale = w / h;

    // 默认图片质量为0.8
    let quality = 0.8;
    if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
      quality = obj.quality;
    }

    w = w>300 ? w*quality : w;
    h = w>300 ?  w / scale : h;

    //生成canvas
    let canvas = document.createElement('canvas');
    let ctx:any = canvas.getContext('2d');
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(img, 0, 0, w, h);

    // 回调函数返回base64的值
    let base64 = canvas.toDataURL(type, quality);
    callback(base64);
  }
}
