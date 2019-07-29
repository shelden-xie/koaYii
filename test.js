const fetch = require('node-fetch');
// fetch('http://localhost:8888/basic/web/index.php?r=books%2Findex').then(res=>{
//   return res.json();
// }).then(body=>{
//   console.log(body);
// })
const { URLSearchParams } = require('url');
 
const params = new URLSearchParams();

params.append("Books[name]", "则是数据");
params.append('Books[author]', '32');
params.append('Books[price]', '32');

fetch('http://localhost:8888/basic/web/index.php?r=books/create',{
  method: 'POST',
  body: params
})
.then(res => res.json())
.then(json => console.log(json))
.catch((error) => {
  console.log('weweewe',error)
})