const fetch = require('node-fetch');
const config = require('../config');
class SafeRequest {
  constructor(url) {
    this.url = url;
    this.baseUrl = config.baseUrl
  }
  fetch(options) {
    return new Promise((resolve, reject) => {
      let result = {
        code: 0,
        message: '请求成功',
        data:[]
      };
      let test = fetch(this.baseUrl + this.url);
      if(options.body){
        test = fetch(this.baseUrl + this.url,{
          method: options.method,
          body: options.body
        });
      }
      test
      .then(res => {
        return res.json()
      }).then(json=>{
        result.data = json
        resolve(result)
      }).catch(error => {
        result.code = 2;
        result.message = 'node-fetch失败';
        reject(error);
      });
    })
  }
}

module.exports = SafeRequest;