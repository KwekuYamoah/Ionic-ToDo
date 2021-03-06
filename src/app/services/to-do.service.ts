import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  public todos: Todo[] = [];

  constructor(private storage: Storage) {
  }

  load(){
    return new Promise((resolve) => {
      this.storage.get('todos').then((todos) => {
                if(todos != null){
          this.todos = todos;
        }

      resolve(true);
      });
    });
  }

  save(){
    this.storage.set('todos', this.todos);
  }

  getTodo(id){
    return this.todos.find(todo => todo.id == id);
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
    this.save();
  }
}
