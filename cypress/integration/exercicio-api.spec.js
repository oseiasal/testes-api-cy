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
          //TODO: 
     });

     it('Deve cadastrar um usuário com sucesso', () => {
          //TODO: 
     });

     it('Deve validar um usuário com email inválido', () => {
          //TODO: 
     });

     it('Deve editar um usuário previamente cadastrado', () => {
          //TODO: 
     });

     it('Deve deletar um usuário previamente cadastrado', () => {
          //TODO: 
     });


});
