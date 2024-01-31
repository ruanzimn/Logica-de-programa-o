let biblioteca = {
    nome: 'Biblioteca Central',
    livrosDisponiveis: [
        { titulo: 'Aventuras na Floresta', autor: 'Carlos Silva', disponivel: true },
        { titulo: 'O Mistério do Código Perdido', autor: 'Ana Oliveira', disponivel: true },
        { titulo: 'Viagem ao Centro da Terra', autor: 'Miguel Santos', disponivel: false },
        { titulo: 'A Arte da Guerra', autor: 'Sun Tzu', disponivel: true },
    ],
    alunosMatriculados: [
        { nome: 'João', turma: 'A', livrosEmprestados: [] },
        { nome: 'Maria', turma: 'B', livrosEmprestados: [] },
        { nome: 'Pedro', turma: 'A', livrosEmprestados: [] },
    ],
    realizarEmprestimo: function (alunoIndex, livroIndex) {
        if (
            this.alunosMatriculados[alunoIndex] &&
            this.livrosDisponiveis[livroIndex] &&
            this.livrosDisponiveis[livroIndex].disponivel
        ) {
            this.livrosDisponiveis[livroIndex].disponivel = false;
            this.alunosMatriculados[alunoIndex].livrosEmprestados.push(this.livrosDisponiveis[livroIndex]);
            return `Empréstimo do livro "${this.livrosDisponiveis[livroIndex].titulo}" realizado com sucesso para o aluno ${this.alunosMatriculados[alunoIndex].nome}.`;
        } else {
            return 'Empréstimo não disponível. Verifique se o aluno está matriculado e se o livro está disponível.';
        }
    },
};

// Exemplo de utilização
console.log(biblioteca.realizarEmprestimo(0, 0)); // Empréstimo do livro "Aventuras na Floresta" realizado com sucesso para o aluno João.
console.log(biblioteca.realizarEmprestimo(1, 2)); // Empréstimo não disponível. Verifique se o aluno está matriculado e se o livro está disponível.