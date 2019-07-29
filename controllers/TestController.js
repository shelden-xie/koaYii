class TestController{
  constructor(){

  }
  actionIndex(){
    return (ctx)=>{
      ctx.body = 'hello test';
    }
  }
}
module.exports = TestController