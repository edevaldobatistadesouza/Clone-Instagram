import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Usuario } from '../usuario.model'
import { Autenticacao } from '../../autenticacao.service'
 
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  @Output() public exibePainel: EventEmitter<string> = new EventEmitter<string>()

  public formulario = new FormGroup({
    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null)
  })

  constructor( private autenticacao: Autenticacao ) {}

  ngOnInit() {
  }

  public exibePainelLogin(): void{
    this.exibePainel.emit('login')
  }

  public cadastrarUsuario(): void{
    let usuario = new Usuario(
      this.formulario.value.email,
      this.formulario.value.nome_completo,
      this.formulario.value.nome_usuario,
      this.formulario.value.senha
    )

    this.autenticacao.cadastrarUsuario(usuario)
    
  }

}
