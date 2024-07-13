import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, switchMap, map, filter, tap, debounceTime, distinctUntilChanged, catchError, throwError, EMPTY, of } from 'rxjs';
import { booksListTrigger } from 'src/app/animations';
import { Item, Livro, LivrosResultado } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

const TEMPO_DELAY_CHAMADA_API = 300;
@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
  animations: [booksListTrigger]
})
export class ListaLivrosComponent {
  mensagemErro: string = '';
  campoBusca = new FormControl();
  livrosResultado: LivrosResultado;
  constructor(private livroService: LivroService) {}

  livrosEncontratos$ = this.campoBusca.valueChanges
    .pipe(
      debounceTime(TEMPO_DELAY_CHAMADA_API),
      filter(valorDigitado => valorDigitado.length >=3 ),
      distinctUntilChanged(),
      switchMap((valorDigitado) => this.livroService.buscar(valorDigitado)),
      map(resultado => this.livrosResultado = resultado),
      map((resultado) => resultado.items ?? []),
      map((items) => this.converterItemParaLivro(items)),
      tap(livros => console.log(livros)),
      catchError((e) => {
        console.log(e)
        this.mensagemErro = "Ops, ocorreu um erro ao buscar os dados!"
        return EMPTY;
      })

    )

    /*
  listaLivros: Livro[];

  buscarLivros() {
    this.inscricaoApi = this.livroService.buscar(this.campoBusca).subscribe({
      next: (items) => {
        this.listaLivros = this.converterItemParaLivro(items);
      },
      error: (erro) => (this.mensagemErro = erro),
      complete: () => console.log('requisição completou'),
    });
      ngOnDestroy(): void {
        this.inscricaoApi.unsubscribe();
      }
  }*/

  converterItemParaLivro(items: Item[]): LivroVolumeInfo[] {
    return items.map((item) => {
      return new LivroVolumeInfo(item);
    });
  }


}
