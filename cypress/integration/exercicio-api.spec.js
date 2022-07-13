/// <reference types="cypress" />
import user from '../contracts/users.contract'

describe('Testes da Funcionalidade Usuários', () => {

     it('Deve validar contrato de usuários', () => {
          cy.request('usuarios').then((response) => {
               cy.log("Contrato validado")
               return user.validateAsync(response.body)
          })
     });

     it('Deve listar usuários cadastrados', () => {
          cy.request({ method: 'GET', url: 'usuarios' })
               .then((response) => {
                    expect(response.status).to.equal(200)
                    expect(response.body).to.have.property('usuarios')
                    expect(response.body.usuarios.length).to.be.greaterThan(0)
               })
     });

     it('Deve cadastrar um usuário com sucesso', () => {
          let fullName = "Beltrano de Oliveira"
          let nickname = "beltrano"
          let passwd = "teste"
          let year = Math.floor(Math.random() * 9999)
          let email = `${nickname}.${year}@qa.com.br`
          let isAdmin = 'false'

          cy.addUser(fullName, email, passwd, isAdmin).then((response) => {
               expect(response.status).to.equal(201)
               expect(response.body.message).to.equal("Cadastro realizado com sucesso")
          })
     });

     it('Deve validar um usuário com email inválido', () => {
          let fullName = "Beltrano de Oliveira"
          let passwd = "teste"
          let isAdmin = 'false'
          let invalidEmail = "fulaninhodetalfggdqa.com.br"

          cy.addUser(fullName, invalidEmail, passwd, isAdmin).then((response) => {
               expect(response.status).to.equal(400)
               expect(response.body.email).to.equal("email deve ser um email válido")
          })
     });

     it('Deve editar um usuário previamente cadastrado', () => {
          //TODO: 
     });

     it('Deve deletar um usuário previamente cadastrado', () => {
          //TODO: 
     });


});
