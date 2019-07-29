const IndexServices = require('../services/IndexServices');
const { URLSearchParams } = require('url');
 
class IndexController {
  constructor(){

  }
  actionIndex(){
    return async(ctx,next)=>{
      const index = new IndexServices();
      const result = await index.getData();
      ctx.body = await ctx.render("index",{data:result.data});
    }
  }
  actionCreate(){
    return async(ctx,next)=>{
      ctx.body = await ctx.render('create');
    }
  }
  actionSaveData(){
    return async(ctx,next)=>{
      const index = new IndexServices();
      const params = new URLSearchParams();
      params.append("Books[name]", "则是数据");
      params.append('Books[author]', '32');
      params.append('Books[price]', '32');
      const result = await index.createData({
        params
      });
      ctx.body = result;
    }
  }
}

module.exports = IndexController