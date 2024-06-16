import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateFormComponent } from './components/thoughts/create-form/create-form.component';
import { FormsModule } from '@angular/forms';
import { ListCardsComponent } from './components/thoughts/list-cards/list-cards.component';
import { CardThoughtsComponent } from './components/thoughts/card-thoughts/card-thoughts.component';
import { provideHttpClient } from '@angular/common/http';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateFormComponent,
    ListCardsComponent,
    CardThoughtsComponent,
    DeleteThoughtComponent,
    EditThoughtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
