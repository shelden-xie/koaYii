const errorHandle = {
  error(app,logger){
    app.use(async(ctx,next)=>{
      try {
        await next();
      } catch (error) {
        logger.error(error)
        ctx.status = error.status || 500;
        ctx.body = await ctx.render('error');
      }
    })
    app.use(async(ctx,next)=>{
      await next();
      if(ctx.status!==404){
        return false
      };
      ctx.status = 404;
      ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="#放置自己首页的地址#" homePageName="回到我的主页"></script>';
    })
  }
}

module.exports = errorHandle