import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [];

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]')
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string) {
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false,
    };
    return item;
  }

  adicionarItemNaLista(nomeDoItem: string) {
    const item = this.criarItem(nomeDoItem);
    this.listaDeCompra.push(item);
    //this.atualizarLocalStorage()
  }

  editarItemNaLista(itemAntigo: Item, nomeEditadoDoItem: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoDoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado,
    };
    const index = this.listaDeCompra.findIndex((item) => item.id === itemAntigo.id)

    this.listaDeCompra.splice(index, 1, itemEditado)
    //this.atualizarLocalStorage()
  }

  deletarItem(id: string|number){
    const index = this.listaDeCompra.findIndex((item) => item.id === id)
    this.listaDeCompra.splice(index, 1)
    //this.atualizarLocalStorage()
  }

  limparLista(){
    this.listaDeCompra = [];
  }

  atualizarLocalStorage(){
    localStorage.setItem("itens", JSON.stringify(this.listaDeCompra))
  }
}
