
const Mock = require('mockjs')
const Random = Mock.Random

function getQuestionList(opt = {}) {
    const { len = 10, isDeleted = false, isStar = false } = opt
    const list = []
    list.push({
            _id: 0,
            title: '你所不知道的HTML5',
            isPublished:true,
            isStar:false,
            answerCount: 10,
            // createdAt: Random.datetime(),
            isDeleted, 
        })
    list.push({
            _id: 1,
            title: 'CSS3学习指南',
            isPublished: false,
            isStar:true,
            answerCount: 20,
            // createdAt: Random.datetime(),
            isDeleted, 
        })
    list.push({
            _id: 2,
            title: '深入浅出JavaScript',
            isPublished: true,
            isStar:false,
            answerCount: 30,
            // createdAt: Random.datetime(),
            isDeleted, 
        }) 
    list.push({
            _id: 3,
            title: '深入理解React源码',
            isPublished:false,
            isStar:false,
            answerCount: 40,
            // createdAt: Random.datetime(),
            isDeleted, 
        })
        list.push({
            _id: 4,
            title: 'React Native学习指南',
            isPublished:true,
            isStar:false,
            answerCount: 50,
            // createdAt: Random.datetime(),
            isDeleted, 
        })
        list.push({
            _id: 5,
            title: '小程序开发入门',
            isPublished:true,
            isStar:true,
            answerCount: 60,
            // createdAt: Random.datetime(),
            isDeleted, 
        })   
    return list
}

module.exports = getQuestionList
