const qs=require('qs')


const postFormEncoded=(url)=>{
    const data = qs.stringify({
        'grant_type': 'client_credentials' 
      });
const options={
 method:'POST',
   headers:{ 'Content-Type':'application/x-www-form-urlencoded',

},
   data,
   url,
}
return options;
}










module.exports={
postFormEncoded
}