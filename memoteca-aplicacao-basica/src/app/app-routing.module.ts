import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCardsComponent } from './components/thoughts/list-cards/list-cards.component';
import { CreateFormComponent } from './components/thoughts/create-form/create-form.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "listar-pensamentos",
    pathMatch: "full"
  },
  {
    path: "listar-pensamentos",
    component: ListCardsComponent
  },
  {
    path: "criar-pensamento",
    component: CreateFormComponent,
  },
  {
    path: "pensamentos/excluir/:id",
    component: DeleteThoughtComponent
  },
  {
    path: "pensamentos/editar/:id",
    component: EditThoughtComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
