import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { todo } from '../classes/todo';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  lijst:todo[];
  constructor(todoService:TodoService) {
    this.lijst = todoService.todoLijst;   
   }

  ngOnInit() {
  }
  add(arg){
    
    this.lijst.push(new todo(arg.value.item,false));
  }

}
