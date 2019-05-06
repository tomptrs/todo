import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import  {todo} from "../todo/todo.component";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() myTodo: todo;
  @Output() onVoted = new EventEmitter<any>();

  constructor( private todoService:TodoService) { }

  ngOnInit() {
  }

  vote(){
    
    if(!this.myTodo.isDone)
      this.todoService.add(this.myTodo);
    else
      this.todoService.remove(this.myTodo);

  }

}
