const {
  join
} = require('path');

const _ = require('lodash');
console.log('huan', process.env.NODE_ENV);
let config = {
  "viewDir": join(__dirname, '..', 'views'),
  "staticDir": join(__dirname, '..', 'assets')
}
if (process.env.NODE_ENV === 'development') {
  const localConfig = {
    port: 3000,
    baseUrl:'http://localhost:8888/basic/web/index.php?r='
  }
  config = _.extend(config,localConfig);
}
// pm2启动
if (process.env.NODE_ENV === 'prodution') {
  const proConfig = {
    port: 8081
  };
  config = _.extend(config,proConfig);
};

module.exports = config;