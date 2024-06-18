import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CadastroComponent } from "./pages/cadastro/cadastro.component";
import { SucessoCadastroComponent } from "./pages/sucesso-cadastro/sucesso-cadastro.component";
import { FormsModule } from "@angular/forms";
import { MensagemErroComponent } from "./components/mensagem-erro/mensagem-erro.component";
import { MaiorDeIdadeDirective } from "./directives/maior-de-idade.directive";
import { HttpClientModule } from "@angular/common/http";
import { CepValidoDirective } from './directives/cep-valido.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CadastroComponent,
    SucessoCadastroComponent,
    MensagemErroComponent,
    MaiorDeIdadeDirective,
    CepValidoDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
