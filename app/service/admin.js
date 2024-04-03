const Service = require('egg').Service;
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
  //获取用户列表
  async adminlist() {
      const {ctx} = this;
      const res = await ctx.model.Admin.find();
      return res;
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