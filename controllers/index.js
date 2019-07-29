const IndexController = require('./IndexController');
const TestController = require('./TestController');
const router = require('koa-simple-router');
const indexController = new IndexController();
const testController = new TestController();


module.exports = (app)=>{
  app.use(router(_ => {
    _.get('/', indexController.actionIndex());
    _.get('/index/saveData', indexController.actionSaveData());
    _.get('/index/create', indexController.actionCreate());
    _.get('/index/test', testController.actionIndex());
  }));
}