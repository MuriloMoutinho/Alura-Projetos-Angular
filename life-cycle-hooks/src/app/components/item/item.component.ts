import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnDestroy  {

  @Input()
  item!: Item;

  @Output()
  emitindoItemParaEditar = new EventEmitter<Item>();

  @Output()
  emitindoIdParaDeletar = new EventEmitter<string | number>();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  checarItem() {
    if(this.item.comprado == true){
      this.item.comprado = false;
    }else{
      this.item.comprado = true;
    }
  }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item);
  }

  deletarItem(){
    this.emitindoIdParaDeletar.emit(this.item.id);
  }

  ngOnDestroy(){
    console.log("Eu fui desrenderizado da tela")
  }
}
