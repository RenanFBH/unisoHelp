import AlunoModel from '../../model/alunoModel';
import AlunoRepository from '../../data/repositories/alunoRepository';

const LoginViewModel = async (data: AlunoModel)=> {

    let response = AlunoRepository.findAluno(data.ra);
    console.log(response);


    //if (data.password !== "19112026") {
        //return false;
    //} 
    //return true;

}

export default LoginViewModel;