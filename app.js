const Koa = require('koa');
var render = require('koa-swig');
const serve = require('koa-static');
const app = new Koa();
const config = require('./config');
const co = require('co');
var log4js = require('log4js');
const errorHandle= require('./middlewares/error');

log4js.configure({
  appenders: { cheese: { type: 'file', filename: './log4js/cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

var logger = log4js.getLogger();
errorHandle.error(app,logger);
require('./controllers')(app);
app.use(serve(config.staticDir));
app.context.render = co.wrap(render({
  // ...your setting
  root: config.viewDir,
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  varControls:['[[',']]'],
  writeBody: false
}));

app.listen(config.port,()=>{
  console.log('服务已经启动');
});