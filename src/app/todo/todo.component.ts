import { Component, OnInit } from '@angular/core';

export class todo{
  constructor(public name:string, public isDone:boolean){
    
  }
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  lijst:todo[];
  constructor() {
    this.lijst = [];
    this.lijst.push(new todo("winkelen",false));
    this.lijst.push(new todo("tuin klaarmaken",false));
    this.lijst.push(new todo("afwassen",false));
   }

  ngOnInit() {
  }
  add(arg){
    console.log(arg.value);
    this.lijst.push(new todo(arg.value.item,false));
  }

}
