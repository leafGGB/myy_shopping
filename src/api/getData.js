import { SUCC_CODE, TIMEOUT } from './config';
import { getJSON } from './ajax';

// 获取数据
const getData = (url, options) => {
    return getJSON(url, {
        timeoutTime: TIMEOUT,
        ...options
    })
        .then(response => {
            // {
            //     code: 200,
            //     data: []
            // }
            if (response.code !== SUCC_CODE) throw new Error(`出错了：${repsonse.code}`);

            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export { getData };