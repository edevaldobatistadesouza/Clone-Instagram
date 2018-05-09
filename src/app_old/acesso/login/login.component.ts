import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'  
import { Autenticacao } from '../../autenticacao.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output()  public exibePainel: EventEmitter<string> = new EventEmitter<string>()

  public formulario: FormGroup = new FormGroup({
    'login': new FormControl(null),
    'senha': new FormControl(null)
  })

  constructor( private autenticacao: Autenticacao ) { }

  ngOnInit() {
  }

  public exibePainelCadastro(): void{
    this.exibePainel.emit('cadastro')
  }

  public autenticacaoLogin(): void{
    this.autenticacao.autenticar(
      this.formulario.value.login,
      this.formulario.value.senha
    )
  }

}
