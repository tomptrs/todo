import { Injectable } from '@angular/core';
import { todo } from './classes/todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todoLijst:todo[];
  public doneLijst:todo[];
  constructor() { 
    this.todoLijst = []; 
    
    this.todoLijst.push(new todo("winkelen",false));
    this.todoLijst.push(new todo("tuin klaarmaken",false));
    this.todoLijst.push(new todo("afwassen",false));

    this.doneLijst = [];
  }

  add(item:todo){
    console.log("add");
    console.log(item);
    this.doneLijst.push(item);
    console.log(this.doneLijst)
  }

  remove(item:todo){

    let idx = this.doneLijst.findIndex(it=>it.name == item.name);
    if(idx > 0)
      this.doneLijst.splice(idx,1);
  }
 
}
