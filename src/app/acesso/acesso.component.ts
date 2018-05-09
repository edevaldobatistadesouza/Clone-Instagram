import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {

  public estadoLogin: string = 'cadastro'
  public cadastro: boolean = false

  constructor() { }

  ngOnInit() {
  }

  public exibePainel(event: string): void{
    this.cadastro = event === 'cadastro' ? true : false
  }

  public exibePainelLogin(event: string): void{
    this.cadastro = event === 'login' ? false : true
  }

}
