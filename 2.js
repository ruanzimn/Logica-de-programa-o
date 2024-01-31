let escola = {
    nome: 'Escola XYZ',
    localizacao: 'Cidade ABC',
    cursosOferecidos: ['Matemática', 'Ciências', 'Inglês', 'Programação'],
    alunos: [
        { nome: 'João', idade: 15, turma: 'A', notas: { matematica: 80, ciencias: 75, ingles: 90 } },
        { nome: 'Maria', idade: 16, turma: 'B', notas: { matematica: 85, ciencias: 92, ingles: 88 } },
        { nome: 'Pedro', idade: 14, turma: 'A', notas: { matematica: 78, ciencias: 80, ingles: 85 } },
    ],
    professores: [
        { nome: 'Prof. Silva', disciplina: 'Matemática', turma: 'A' },
        { nome: 'Prof. Oliveira', disciplina: 'Ciências', turma: 'B' },
        { nome: 'Prof. Santos', disciplina: 'Inglês', turma: 'C' },
        { nome: 'Prof. Souza', disciplina: 'Programação', turma: 'D' },
    ],
    aulas: [
        { disciplina: 'Matemática', turma: 'A', horario: '08:00', sala: 'Sala 1', professor: 'Prof. Silva' },
        { disciplina: 'Ciências', turma: 'B', horario: '09:30', sala: 'Sala 2', professor: 'Prof. Oliveira' },
        { disciplina: 'Inglês', turma: 'C', horario: '11:00', sala: 'Sala 3', professor: 'Prof. Santos' },
        { disciplina: 'Programação', turma: 'D', horario: '14:00', sala: 'Laboratório', professor: 'Prof. Souza' },
    ],
    realizarMatricula: function (aluno) {
        this.alunos.push(aluno);
        return `Matrícula de ${aluno.nome} realizada com sucesso.`;
    },
    listarAlunosPorTurma: function (turma) {
        return this.alunos.filter(aluno => aluno.turma === turma);
    },
};

// Exemplo de utilização
console.log(escola.realizarMatricula({ nome: 'Ana', idade: 15, turma: 'B', notas: { matematica: 88, ciencias: 90, ingles: 95 } }));
console.log(escola.listarAlunosPorTurma('A'));