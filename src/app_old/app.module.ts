import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modulo de animação
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Formulário
import { ReactiveFormsModule } from '@angular/forms'

//Serviços
import { Autenticacao } from './autenticacao.service'
import { AutenticacaoGuard } from './autenticacao-guard.service'

//Rotas
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { AcessoComponent } from './acesso/acesso.component';
import { LoginComponent } from './acesso/login/login.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { BannerComponent } from './acesso/banner/banner.component';
import { HomeComponent } from './home/home.component';
import { PublicacoesComponent } from './home/publicacoes/publicacoes.component';


@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    LoginComponent,
    CadastroComponent,
    BannerComponent,
    HomeComponent,
    PublicacoesComponent
  ],  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ Autenticacao, AutenticacaoGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
