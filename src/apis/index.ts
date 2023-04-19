import request from './request';

// export const list = () => {
//     return request({
//         url: '/api/list',
//         method: 'get',
//     });
// }

export const list = () => request.get('/api/list');