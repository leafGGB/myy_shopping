// 工具函数

// 数据序列化成 urlencoded 格式的字符串

const serilalize = param => {
    const results = [];

    for (const [key, value] of Object.entries(param)) {
        results.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);  
    };

    // 结果
    // ['username=GGB','age=200'];

    return results.join('&');
};

// 数据序列化成 JSON 格式的字符串
const serilalizeJSON = param => {
    return JSON.stringify(param);
};

// 给 URL 添加参数
// 如果已经有参数，就先加 & 再拼接；如果没有参数，就要先加 ？再拼接
const addURLData = (url, data) => {
    if(!data) return '';

    // 三目运算符，判断是否有参数，声明一个标记
    const mark = url.includes('?') ? '&' : '?';

    return `${mark}${data}`;
}

export {serilalize, addURLData, serilalizeJSON};