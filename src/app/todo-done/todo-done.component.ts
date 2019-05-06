import { Component, OnInit } from '@angular/core';
import {TodoService} from "../todo.service";
import { todo } from '../todo/todo.component';

@Component({
  selector: 'app-todo-done',
  templateUrl: './todo-done.component.html',
  styleUrls: ['./todo-done.component.css']
})
export class TodoDoneComponent implements OnInit {

  lijst:todo[];
  constructor(private todoService:TodoService) { 
  
  }

  ngOnInit() {
    this.lijst =this.todoService.doneLijst;
  }

}
