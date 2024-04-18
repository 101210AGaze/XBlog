export function reqTimeout(fetchFn, timeout) {
    const fetchFnPromise = fetchFn(); // 调用fetchFn函数获取请求Promise

    const Timeout = new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            clearTimeout(timer); // 清除计时器避免内存泄漏
            reject(new Error("fetch请求已超时")); // 提示请求超时
        }, timeout);
    });

    return Promise.race([fetchFnPromise, Timeout]).then(res => {
        console.log('请求成功：', res);
    }).catch(err => {
        console.log('请求出错或超时：', err.message);
    });
}
