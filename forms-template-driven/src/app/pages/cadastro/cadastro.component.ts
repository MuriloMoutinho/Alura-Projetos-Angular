import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ConsultaCepService } from "src/app/services/consulta-cep.service";
import { DadosCep } from "src/app/models/dados-do-cep.model";
import { compileClassMetadata } from "@angular/compiler";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(
    private router: Router,
    private consultaCepService: ConsultaCepService
  ) {}

  ngOnInit(): void {}

  consultarCep(e: any, form: NgForm) {
    const cep = e.target.value;
    if (cep !== "") {
      this.consultaCepService.buscarCep(cep).subscribe({
        next: (dadosDoCep: DadosCep) => {
          console.log(dadosDoCep)
          this.popularCamposEnderecos(dadosDoCep, form);
        },
        error: (erro) => {},
      });
    }
  }

  popularCamposEnderecos(dadosDoCep: DadosCep, form: NgForm){
    form.form.patchValue({
      endereco: dadosDoCep.logradouro,
      complemento: dadosDoCep.complemento,
      bairro: dadosDoCep.bairro,
      cidade: dadosDoCep.localidade,
      estado: dadosDoCep.uf,
    })
  }

  cadastrar(form: NgForm) {
    if (form.valid) {
      this.router.navigate(["/sucesso"]);
    } else {
      alert("Formulário inválido");
    }
  }
}
