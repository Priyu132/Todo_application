import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  todoItem : string = '';
  todoList : Array<string>=[];

addTodo(){
this.todoList.push(this.todoItem);
console.log(this.todoList)
this.todoItem = '';
}

removeTodo(index:number){
this.todoList.splice(index,1)
}
}
