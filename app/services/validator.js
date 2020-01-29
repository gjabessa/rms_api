
//check required body parameters
module.exports.check_existence = function(data){
    for(element in data){
        if(data[element] == undefined){
            return {success:false,message:'Missing '+element}
        }         
    }
    return {success:true,message:'Validated'}
}