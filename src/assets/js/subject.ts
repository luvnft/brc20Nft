// messageService.js
import { BehaviorSubject } from 'rxjs';

// 创建一个 BehaviorSubject 实例
const subscriber = new BehaviorSubject(null);

// 发送数据的函数
const sendNext = (data: any) => {
  subscriber.next(data);
};

// 导出 subscriber 和 send 函数
export { subscriber, sendNext };
