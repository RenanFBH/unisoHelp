import Opendb from '../database/db';

const AlunoRepository = {

    async findAluno(ra_aluno: number) {
        const db = await Opendb(); 
        return await db.getFirstAsync('SELECT * FROM Aluno WHERE ra_aluno = ?', ra_aluno);
    }

};

export default AlunoRepository;