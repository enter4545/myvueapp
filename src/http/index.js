import axios from 'axios';

const Http = axios.create({
    baseURL: 'http://127.0.0.1:3007/api',
    //  baseURL: 'http://whuijin.work/api',
    
    // baseURL: 'https://www.fastmock.site/mock/cde9f27378c3302db72f2205b78f3617/fastmock',
    timeout: 10000
})

export default Http