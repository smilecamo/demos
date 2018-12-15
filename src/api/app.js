const getAppName = () => new Promise((resolve, reject) => {
  const err = null;
  setTimeout(() => {
    if (!err) {
      resolve({ code: 200, info: { appName: 'actions异步修改' } });
    } else {
      reject(err);
    }
  }, 100);
});
export default getAppName;
