import UserModel from '../../model/userModel'

const LoginViewModel =(data: UserModel, navigation: any)=> {

    if (data.ra !== "000006" && data.password !== "19112026") {
        return false;
    } 
    navigation.navigate("index");
    return true;

}

export default LoginViewModel;