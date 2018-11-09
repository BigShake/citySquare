module.exports={
    //返回成功响应数据格式
    resSuccessObj: function(code, data){
        return {
            code: code,
            data: data
        }
    },
    //返回错误响应数据格式
    resErrorObj: function(code, data){
        return {
            code: code,
            error: data
        }
    },
    //参数不全
    incompleteParame: function(){
        return {
            code: -1,
            error: '参数不全'
        }
    }
}

