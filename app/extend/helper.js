const bcrypt = require("bcryptjs");
const moment = require("moment");
module.exports= {
    moment,
    genSaltPassword(password) {
        return new Promise((resolve,reject)=>{
            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(password,salt,(err,hash)=>{
                    if(!err) {
                        resolve(hash)
                    }else {
                        reject(err)
                    }
                })
            })
        });
    },
};