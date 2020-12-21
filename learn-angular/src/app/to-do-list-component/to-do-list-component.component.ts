import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list-component',
  templateUrl: './to-do-list-component.component.html',
  styleUrls: ['./to-do-list-component.component.css'],
})
export class ToDoListComponentComponent implements OnInit {
  items = ['Homework', 'Project'];
  @Input()
  additem: string;
  constructor() {}

  ngOnInit(): void {}

  AddTodo(): void {
    this.items.push(this.additem);
    this.additem = '';
  }

  deleteTodo(itemDel: string): void {
    this.items = this.items.filter((item) => item !== itemDel);
  }
}
