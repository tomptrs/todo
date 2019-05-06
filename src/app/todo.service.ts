import { Injectable } from '@angular/core';
import {todo} from "../app/todo/todo.component";

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
   console.log("remove");
   console.log(item);

    let temp = this.doneLijst.filter(function(value, index, arr){     
      return value.name != item.name;  
  });

  this.doneLijst = [];
  for(var i=0;i<temp.length;i++)
    this.doneLijst[i]= temp[i];
console.log(this.doneLijst);
//  this.doneLijst = [...temp];

  }
}
