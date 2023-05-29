// 常量
import {HTTP_GET,CONTENT_TYPE_FROM_URLENCODED} from './constants.js';

// 默认参数
const DEFAULTS = {
    method: HTTP_GET,
    // 请求头携带的数据
    params: null,
    // 如果有数据
    // params: {
    //     username: 'GGB',
    //     age: 200
    // }

    // 请求体携带的数据
    data: null,
    // 如果有数据
    // data: {
    //     username: 'GGB',
    //     age: 200
    // }
    // data: FormData 数据

    contentType: CONTENT_TYPE_FROM_URLENCODED,
    responseType: '',
    timeoutTime: 0,
    withCredentials: false,

    // 方法
    success() {},
    httpCodeError() {},
    error() {},
    abort() {},
    timeout() {}
};

export default DEFAULTS;