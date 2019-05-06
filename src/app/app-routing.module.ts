import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoDoneComponent } from './todo-done/todo-done.component';

const routes: Routes = [
  {path:"todo",component:TodoComponent},
  {path:"done",component:TodoDoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
