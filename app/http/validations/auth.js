const {body} = require("express-validator")
function register(){
    return [
        body("username").notEmpty().isLength({min : 4 , max : 10}).custom((value , ctx) => {
            if(value){
                const usernameRegex = /^[a-z]+[a-z0-9\-\.{2,}]/gi
                if(usernameRegex.test(value)){
                    return true
                }else{
                    throw "نام کاربری صحیح نیست"
                }
            }else{
                throw "نام کاربری نمیتواند خالی باشد"
            }

        }),
        body("email").isEmail().withMessage("ایمیل وارد شده صحیح نیست"),
        body("password").isLength({min : 8 , max : 16})
    ]
}