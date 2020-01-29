module.exports.authorization = function(token){
    var auth = new Promise((resolve,reject)=>{
        jwt.verify(token,'shhhhh',function(err,decoded){
            if(err){
                reject(err)
            } else {
                resolve(decoded)
            }
        })
    }).then(function(data){
        return {success:true,message:data}
    },function(err){
        return {success:false,message:'Authorization Error',error:err}
    })

    return auth
}