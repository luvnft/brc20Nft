
export const getSessionStorageCtx = () => {
  let ctx = sessionStorage.getItem('ctx');
  return ctx ? JSON.parse(ctx) : null;
};


