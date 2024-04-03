const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const {ctx,service} = this;
    const res = await service.question.questionlist();
    ctx.body = {
        errno : 0,
        data: {
             list: res,
             total: 100
        }
    }
}
    async questionStar() {
        const {ctx,service} = this;
        const id = ctx.params.id;
        const data = ctx.request.body;
        console.log('id--',id);
        console.log('data--',data);
        const res = await service.question.questionStar({
            id,
            isStar:data.isStar
        })
        ctx.body ={
            errno:0,
            res
    }
}
    async questionDelete() {
        const {ctx,service} = this;
        const id = ctx.params.id;
        const res = await service.question.questionDelete({
            id,
            isDeleted:true
        })
        ctx.body = {
            errno:0,
            res
        }
    }
    async questionCreate(){
        const {ctx,service} = this;
        ctx.body = {
            errno:0,
        }
    }
}
module.exports = HomeController