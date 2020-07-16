import { Injectable } from '@angular/core';
import { Todo } from'../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  public todos: Todo[] = [];

  constructor() { 
    this.todos = [{
      id: 123,
      title: 'hello',
      description: 'test'
    }];
  }

  load(){

  }

  save(){

  }

  getTodo(id){

  }

  addTodo(){

  }
}
