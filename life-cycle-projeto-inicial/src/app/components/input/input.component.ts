import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges {

  @Input()
  itemQueVaiSerEditado!: Item;
  valorItem!: string;
  editando = false;

  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemQueVaiSerEditado'].firstChange){
      this.valorItem = this.itemQueVaiSerEditado?.nome;
      this.editando = true;
    }
  }

  enviarInput(){
    if(this.editando){
      this.editarItem()
    }else{
      this.adicionarItem()
    }
  }

  adicionarItem() {
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }
  editarItem(){
    this.listaService.editarItemNaLista(this.itemQueVaiSerEditado, this.valorItem);
    this.editando = false;
    this.limparCampo();
  }

  limparCampo(){
    this.valorItem = "";
  }
}
