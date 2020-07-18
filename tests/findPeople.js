const should = require("should");
const findPessoas = require("../findPeoples.js")

describe("find person", () => {

    it("soma pessoas", () => {

        findPessoas.somaPessoas(2, 5).should.be.equal(7);

    });

    it("Somar dois números e retornar 30",() => {

        findPessoas.somaPessoas(10, 20).should.be.equal(30)

    });

    it("Passar um nome que não exista e retonar mensagem de que n existe", () => {

        findPessoas.encontraPessoa("Danilo").should.be.equal("Pessoa não encontrada");
        
    });
    
    it("retorna mensagem de nome obrigatorio", () => {
        
        findPessoas.encontraPessoa().should.be.equal("Nome obrigatorio");

    })
    
    
    it("retorna mensagem em caso de passar um numero", () => {
        
        findPessoas.encontraPessoa(123).should.be.equal("Tipo inválido");

    })

      
    it("Deve retornar um nome da lista", () => {
        
        findPessoas.encontraPessoa("Danilo Lima").should.be.equal("Danilo Lima");

    })
})