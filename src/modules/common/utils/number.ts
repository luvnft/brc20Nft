import BigNumber from 'bignumber.js';

const isInt = (n: number) => n === parseInt(n.toString(), 10);
const toFormat = (number: number, accuracy: number): string => {
  const numberValue = number.toFixed(accuracy + 1);
  return numberValue.substr(0, numberValue.length - 1);
};
export const ToFixedPipe = (number: any, decimal: number = -1, mode: any = 1, format: boolean = false) => {

  if (number === '--') {
    return number;
  }
  const target = new BigNumber(number);
  // 精度未取得时，会传null进来，需要返回--
  if (target.isNaN() || decimal === null) {
    return target.isNaN() ? '' : number;
  }
  let result;
  if (decimal === -1) {
    result = target.toFixed();
  } else {
    if (format) {
      result = target.toFormat(decimal, mode);
    } else {
      result = target.toFixed(decimal, mode);
      // 处理-0问题
      const bgTemp = new BigNumber(result);
      if (bgTemp.eq(0) && bgTemp.s === -1) {
        // 出现-0，乘-1后再输出
        return target.multipliedBy(-1).toFixed(decimal, mode);
      } else {
        return result;
      }
    }
  }
  return result;

};


export const ToRiskPipe = (number: any) => {

  if (number === '--') {
    return number;
  }
  const target = new BigNumber(number);
  // 精度未取得时，会传null进来，需要返回--
  if (target.isNaN()) {
    return target.isNaN() ? '' : number;
  }
  let result;
  if (target.isGreaterThan(10000)) {
    return '>10000%';
  }
  if (target.isLessThan(0)) {
    result = `-${target.toFixed(2, 1).replace(/-/ig, '')}%`;
  } else if (target.isGreaterThan(0)) {
    result = `+${target.toFixed(2, 1).replace(/\+/ig, '')}%`;
  } else if (target.isEqualTo(0)) {
    result = `${target.toFixed(2, 1)}%`;
  }
  return result;

};


export const PricePipe = (number: any) => {
  if (number === '--' || Number(number) === 0 || number === '') {
    return number;
  }
  const target = new BigNumber(number);
  if (target.isNaN()) {
    return '--';
  }
  let result;
  if (target.isLessThan(0.0001)) {
    let valueStr = String(number);
    let valSplit = valueStr.split('.');
    let strVal = valSplit[1];
    let strValArr = [...strVal];
    let s = 0;
    for (let i = 0; i < strValArr.length; i++) {
      if (Number(strValArr[i]) === 0) {
        s = s + 1;
      } else {
        break;
      }
    }
    let sub = strVal.substring(s, s + 2);
    result = `${valSplit[0]}.0{${s}}${sub}`;
  } else {
    result = target.toFixed(4, 1);
  }
  return result;
};

export const shiftedBy = (a: any) => {
  if (isNaN(a)) {
    return '0';
  }
  return new BigNumber(a.toString()).shiftedBy(-18).toFixed();
};
export const div = (a: any, b: any) => {
  return new BigNumber(a.toString()).div(b).toNumber();
};


export const dividedBy = (a: any, b: any) => {
  if (isNaN(a) || isNaN(b) || !a || !b) {
    return '0';
  }
  return new BigNumber(a.toString()).div(b).toFixed();
};
export const minus = (a: any, b: any) => {
  if (isNaN(a) || isNaN(b) || !a || !b) {
    return '0';
  }
  return new BigNumber(a.toString()).minus(b).toFixed();
};


export const multipliedBy = (a: any, b: any) => {
  if (isNaN(a) || isNaN(b) || !a || !b) {
    return '0';
  }
  return new BigNumber(a).multipliedBy(b).toFixed();
};

export const isLessThan = (a: any, b: any) => {
  if (isNaN(a) || isNaN(b) || !a || !b) {
    return false;
  }
  return new BigNumber(a).isLessThan(b);
};


export const formatUnitNumber = (number: any, accuracy = 1, lang: string = 'en-US') => {
  let n = Number(number);
  if (n === 0) {
    return number;
  }
  let target = new BigNumber(number);
  if (target.isNaN()) {
    return '';
  }
  if (target.isGreaterThan(0.00001) && target.isLessThan(999)) {
    return target.toFixed(accuracy, 1);
  }
  if (target.isLessThan(0.00001)) {
    return '<0.00001';
  }
  const toString = (n: number, unit: string): string => {
    const numberValue = toFormat(n, accuracy);

    return (
      (isInt(parseFloat(numberValue)) ? n.toFixed(0) : numberValue) +
      unit.toUpperCase()
    );
  };
  // zh-CN 超过数字五位数是万。 超过8位数是亿，超过千位数亿是万亿。
  if (lang === 'zh-CN') {
    if (n >= 1e4 && n < 1e8) {
      return toString(div(n, 1e4), '万');
    }
    if (n >= 1e8 && n < 1e12) {
      return toString(div(n, 1e8), '亿');
    }
    if (n >= 1e12 && n < 1e15) {
      return toString(div(n, 1e12), '万亿');
    }
  }


  if (n >= 1e3 && n < 1e6) {
    return toString(div(n, 1e3), 'k');
  }
  if (n >= 1e6 && n < 1e9) {
    return toString(div(n, 1e6), 'm');
  }
  if (n >= 1e9 && n < 1e12) {
    return toString(div(n, 1e9), 'b');
  }
  if (n >= 1e12 && n < 1e15) {
    return toString(div(n, 1e12), 't');
  }
  if (n > 1e15) {
    return '>1t';
  }
  return n;
};
