import { Component, DoCheck, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';
  listaDeCompra!: Item[]
  itemParaSerEditado!: Item;

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompra = this.listaService.getListaDeCompra();
  }

  ngDoCheck(): void {
    console.log("check")
    this.listaService.atualizarLocalStorage()
  }

  botaoFoiClicado(){
    console.log("ok")
    this.console()
  }
  oi = ""
  console(){
    console.log("ok 2")
    this.oi = "aa"
  }

  editarItem(item: Item){
    this.itemParaSerEditado = item;
  }

  deletarItem(id: string|number){
    this.listaService.deletarItem(id);
  }

  limparLista(){
    this.listaDeCompra = []; //limpando a lista deste componente e da service. Porque até agora a lista
    //deste componente fazia inferência à lista da service. Ou seja, tudo o que ocorria dentro da service era refletido para esta lista
    //porém ao instanciar um novo array para a lista da service, como = []; . Esta inferência é perdida, então esta ação não é refletida
    //para o array deste componente. Logo precisei limpar o array deste componente também.
    this.listaService.limparLista();
  }
}
