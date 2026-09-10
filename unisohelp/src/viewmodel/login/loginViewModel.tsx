import UserModel from '../../model/userModel'

const LoginViewModel =(data: UserModel)=> {

    if (data.ra !== "000006" && data.password !== "19112026") {
        return false;
    } 
    return true;

}

export default LoginViewModel;