class AuthController {
    register(){
        const {email , number , username , password} = req.body
    }


    login(){

    }

    resetPassword(){
        
    }
}

module.exports = {
    AuthController = new AuthController()
}