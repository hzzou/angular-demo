import { Component, OnInit } from '@angular/core';


interface Todo{
  id:number;
  desc:string;
  completed:boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos:Todo[] = []; // 默认为public,也可明确标明为public
  desc = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(){
    this.todos.push({
      id: this.todos.length,
      desc:this.desc,
      completed:false
    });

    console.log(this.todos)

    this.desc = ''
  }

}
