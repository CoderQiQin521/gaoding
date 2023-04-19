import Mock from 'mockjs'

const Random = Mock.Random

const data = Mock.mock({
    'list|1-10': [{
        'id|+1': 1
    }]
})

Mock.mock('/api/list', 'get', () => {
    return {
        code: 200,
        message: 'success',
        data: data
    }
})