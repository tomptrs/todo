import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDoneComponent } from './todo-done/todo-done.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import {TodoService} from "../app/todo.service";
import { MaterialModule } from "./material.module";

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoDoneComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    BrowserAnimationsModule,  
    ReactiveFormsModule, 
    MaterialModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
