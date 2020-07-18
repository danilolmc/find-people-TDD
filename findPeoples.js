const lista = ["Danilo Lima","Marcos Vinicius","Daniel Lima","Silas de Carvalho"];

function somaPessoas(a, b) {

    return a + b;
};

function encontraPessoa(nome) {

    try {
    
        valida(nome);
        const pessoaEncontrada = lista.find(pessoa => pessoa === nome);

        return pessoaEncontrada ? pessoaEncontrada : "Pessoa não encontrada"
    
    } catch (error) {

        return error;
    }


}


const valida = (nome) => {

    if(!nome) throw "Nome obrigatorio"
    if(typeof nome !== "string") throw "Tipo inválido";
    

}

module.exports = {
    somaPessoas,
    encontraPessoa
};