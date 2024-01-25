import momentTimezone from 'moment-timezone';
import moment from 'moment';
const ONE_DAY = 1000 * 60 * 60 * 24;

export const momentFormat=(value:any, formatString?:string) => {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss';
  return moment(Number.parseInt(String(new Date(value).getTime()))).format(formatString);
}

export const getDaysLeft = (endDate: Date) => {
  const today = new Date();

  if (today.getMonth() === 11 && today.getDate() > 25) {
    endDate.setFullYear(endDate.getFullYear() + 1);
  }

  return Math.ceil((endDate.getTime() - today.getTime()) / ONE_DAY);
};

export function getTimeRemaining(endtime: Date) {
  const total =
    Date.parse(new Date(endtime).toString()) -
    Date.parse(new Date().toString());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

export function getTimeLeft(timers: number) {
  const total =
    Date.parse(new Date(timers).toString()) -
    Date.parse(new Date().toString());
  const oneDay = 1000 * 60 * 60 * 24, oneHour = 1000 * 60 * 60, oneMinute = 1000 * 60;
  let days = Math.floor(total / oneDay).toString();
  let hours = Math.floor(((total - parseInt(days) * oneDay) / oneHour)).toString();
  let minutes = Math.floor(((total - parseInt(days) * oneDay - parseInt(hours) * oneHour) / oneMinute)).toString();
  let seconds = Math.floor((total - parseInt(days) * oneDay - parseInt(hours) * oneHour - parseInt(minutes) * oneMinute) / 1000).toString();
  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

export function getTzTimeFormat(timers: number, tz: string, formatString: string = 'YYYY-MM-DD HH:mm:ss') {
// @ts-ignore
  return momentTimezone.tz(timers, tz).format(formatString);
}

export function getTimeFormat(timers: number) {
  const years = new Date(timers).getFullYear();
  const mounth = new Date(timers).getMonth() + 1;
  const days = new Date(timers).getDate();
  const formatDate = years + '.' + mounth + '.' + days;
  return formatDate;
}

export function getExpiration(timers: number) {
  const nowDate = new Date().getTime() + ONE_DAY * timers;
  return nowDate.toString().slice(0, 10);
}

export const fromatTimersStyle = (timer: number) => {
  const dates = new Date(timer);
  const en_mon_arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return en_mon_arr[dates.getMonth()] + ' ' + dates.getDate() + ', ' + dates.getFullYear() + ' ' + dates.getHours() + ':' + dates.getMinutes();
};
