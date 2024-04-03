const Service = require('egg').Service;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
class AdminService extends Service {
  //增加用户信息
  async adminLogin(params) {
      const {ctx} = this;
      const oldUser = await ctx.model.Admin.findOne({
        userName:params.userName
      })
      //  console.log(oldUser);
      console.log(params.password);
      if(!oldUser) {
        return {
            msg:'用户不存在'
        }
      }
    //   const res = await ctx.model.Admin.create(body);
    //   console.log('res---',res);
    //   // return res.data.data;
    //   return res;
  }
  //获取文章列表
  async questionlist() {
      const {ctx} = this;
      const res = await ctx.model.Question.find();   
      return res;
  }
 async questionStar(params) {
      console.log(params);
      const {ctx} = this;
      const updateData = {
        isStar:params.isStar
      } 
      const res = await ctx.model.Question.updateOne({
        _id:new ObjectId(params.id)
      },updateData)
      console.log(res);
  }
 async questionDelete(params) {
      const {ctx} = this;
      await ctx.model.Question.deleteOne(
        {_id:new ObjectId(params.id)}
      );
  }


  async remove(id) {
      const {ctx} = this;
      console.log(id);
      const res = await ctx.model.Admin.deleteOne({"_id":id});
      return res;
  }
}

 //删除用户信息


module.exports = AdminService;