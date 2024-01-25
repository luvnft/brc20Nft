import { createAction } from '@reduxjs/toolkit';
import { INotificationProps } from './notificationSlice';

export const NotificationActions = {
  showNotification: (() => {
    let key = 0;
    // console.log('---------1----')
    return createAction(
      'NotificationActions/showNotification',
      (notification: INotificationProps) => ({
        payload: {
          key: ++key,
          ...notification,
        },
      }),
    );
  })(),
};
