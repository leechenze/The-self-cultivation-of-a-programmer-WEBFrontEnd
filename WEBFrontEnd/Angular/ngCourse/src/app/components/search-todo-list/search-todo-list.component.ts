import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-todo-list',
  templateUrl: './search-todo-list.component.html',
  styleUrls: ['./search-todo-list.component.scss']
})
export class SearchTodoListComponent implements OnInit {

  public keywords:string = "";
  public historyList:Array<string> = [];
  public todoKeyWord:string = "";
  // title为事项名称, type为事项类型(false:待办, true:已办)
  public todoList:Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }
  
  doSearch() {
    if(this.keywords!="") {
      if(this.historyList.includes(this.keywords)){
        this.keywords = '';
        return;
      }
      this.historyList.push(this.keywords);
      this.keywords = '';
    }
  }
  delSearch(index:number):void {
    this.historyList.splice(index, 1);
  }
  doadd(ev:any) {
    if(this.todoKeyWord!="") {
      if(ev.type == 'keyup'){
        if(ev.keyCode == 13){
          if(this.todoList.every(item => item.title != this.todoKeyWord)){
            this.todoList.push(
              {
                title: this.todoKeyWord,
                type: false,
              },
            )
            this.todoKeyWord = '';
          }
        }
      }else if(ev.type == 'click'){
        if(this.todoList.every(item => item.title != this.todoKeyWord)){
          this.todoList.push(
            {
              title: this.todoKeyWord,
              type: false,
            },
          )
          this.todoKeyWord = '';
        }
      }
      return;
    }
    alert('请输入非空事项');
  }
  delToDoList(index:number):void {
    this.todoList.splice(index, 1);
  }
  tempHandle() {
    console.log(this.todoList);
  }
}
