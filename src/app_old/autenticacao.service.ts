import { Usuario } from './acesso/usuario.model'
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { Router } from '@angular/router'

@Injectable() export class Autenticacao{

    public tokenId: string

    constructor( private router: Router ){}

    public cadastrarUsuario(usuario): void{
        //console.log('Chegamos em serviço! ', usuario)

        //Acessa o dimensão de autenticação e cria uma autenticação
        //com base no usuário e senha enviado via formulário
        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta) => {

                //Deleta a senha do usuário antes de gravar no banco
                delete usuario.senha

                firebase.database().ref(`usuarios/${btoa(usuario.email)}`)
                    .set(usuario)
                    .then( () => console.log('Cadastro concluido com sucesso!') )
            })
            .catch((error: Error) => { console.log('Algo errado ', error) })

    }

    public autenticar(email, senha): void{
        //Acessa a dimenenção de autenticação
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta) => { 
                firebase.auth().currentUser.getIdToken()
                    .then( (token_id) => {
                        this.tokenId = token_id
                        localStorage.setItem('idToken', token_id)

                        this.router.navigate(['home'])
                    })
                    .catch((erro: Error) => console.log(erro))
            })
            .catch((erro: Error) => { console.log('Opa, erroou! ', erro) })
    }

    public autenticado(): boolean{

        //Verifica o token esta preenchido e o tekenId diferente de nulo
        if(this.tokenId !== undefined && localStorage.getItem('idToke') !== null){
            this.tokenId = localStorage.getItem('idToken')
        }

        //Redireciona para a raiz do projeto caso o teken esteja undefined
        if(this.tokenId === undefined){
            this.router.navigate(['/'])
        }

        //Retorno da função, retorna um bolean
        return this.tokenId === undefined ? false : true

    }


}