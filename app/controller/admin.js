"use strict";

const Controller = require("egg").Controller;

class AdminController extends Controller {
    constructor(ctx) {
        super(ctx);
        this.createRule = {
            userName:{
                type:"string",
                min:5,
                max:20,
                format:/^[A-Za-z0-9_]{5,20}/
            },
            password:{
                type:"password",
                min:6,
                max:20,
                format:/^[A-Za-z0-9_]{6,20}/
            }
        }
    }
    async adminlist (){
        const {ctx,service} = this;
        const res = await service.admin.adminlist()
        ctx.body = res;
    }

    async adminLogin(){
        const {ctx,service} = this;
        console.log(ctx);
        const data =ctx.request.body; 
        ctx.validate(this.createRule,data);  //使用validate做校验
        console.log(data);
        const res = await service.admin.adminLogin(data);
        console.log(res);
        ctx.body = {
                errno: 0,
                data: {
                    token:"gsewwehordljdpnoghnd"
                }
            }
    }
    async adminRemove() {
        const {ctx,service} = this;
        const id =ctx.params;
        console.log(id.id);
        const res = await service.admin.remove(id.id);
        ctx.body = res;
    }
}
module.exports = AdminController;
