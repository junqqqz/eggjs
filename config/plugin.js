/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  nunjucks : {
  enable: true,
  package: 'egg-view-nunjucks',
  },
  mongoose : {
  enable: true,
  package: 'egg-mongoose',
},
  validate : {
  enable: true,
  package: 'egg-validate',
},
  jwt : {
  enable: true,
  package: "egg-jwt"
},
  io : {
    enable: true,
    package: 'egg-socket.io',
},
  // }
};
