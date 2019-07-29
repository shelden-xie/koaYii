/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-19 15:22:26
 * @LastEditTime: 2019-07-23 17:54:49
 * @LastEditors: Please set LastEditors
 */
const SafeRequest = require('../utils/SafeRequest');
/**
 * @description: asdhasudhas
 * 
 */
class IndexService{
  getData(options){
    const safeRequest = new SafeRequest('books/index');
    return safeRequest.fetch({});
  }
  createData(options){
    const safeRequest = new SafeRequest('books/create');
    return safeRequest.fetch({
      method: 'POST',
      body:options.params
    });
  }
}

module.exports = IndexService
