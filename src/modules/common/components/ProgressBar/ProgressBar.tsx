import React from 'react';
// @ts-ignore
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {Route} from 'react-router-dom'
import './index.css';
NProgress.configure({ showSpinner: false }); // 去掉loading圈圈
export const ProgressBar = (props: any) => {

  React.useState(NProgress.start());
  React.useEffect(() => {
    NProgress.done();
    return () => NProgress.start();
  });

  return (
    <Route {...props} />
  );
};

