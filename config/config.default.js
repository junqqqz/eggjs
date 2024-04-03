/* eslint valid-jsdoc: "off" */

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1710501978301_665';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    view : {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
    }
  },
    io : {
    init: {}, // 传递给 engine.io
    namespace: {
        '/': {
            connectionMiddleware: [],
            packetMiddleware: [],
        },
        '/example': {
            connectionMiddleware: [],
            packetMiddleware: [],
        },
    },
},
    news : { 
      limit: 5,
      serverUrl: 'https://cnodejs.org/api/v1/topics?limit=5',
    },
    baseRouter:'/api'
  };
  config.mongoose = {
  url: 'mongodb://127.0.0.1/blog',
  options: {},
};
  config.security = {
  csrf: false
};
  config.jwt = {
  secret: "123456"
};
  return {
    ...config,
    ...userConfig,
  };
};
