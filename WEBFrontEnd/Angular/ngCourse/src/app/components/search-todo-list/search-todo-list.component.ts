import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'

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

  // 使用 storage 服务
  constructor(public storage:StorageService) {

  }

  ngOnInit(): void {
    // 数据持久化处理
    this.todoList = this.storage.get('todoList') ? JSON.parse(this.storage.get('todoList')) : [];
    this.historyList = this.storage.get('historyList') ? JSON.parse(this.storage.get('historyList')) : [];
  }
  
  doSearch() {
    if(this.keywords!="") {
      if(this.historyList.includes(this.keywords)){
        this.keywords = '';
        return;
      }
      this.historyList.push(this.keywords);
      this.keywords = '';
      this.storage.set('historyList', JSON.stringify(this.historyList));
    } 
  }
  delSearch(index:number):void {
    this.historyList.splice(index, 1);
    this.storage.set('historyList', JSON.stringify(this.historyList));
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
      this.storage.set('todoList', JSON.stringify(this.todoList));
      return;
    }
    alert('请输入非空事项');
  }
  delToDoList(index:number):void {
    this.todoList.splice(index, 1);
    this.storage.set('todoList', JSON.stringify(this.todoList));
  }
  changeTypeHandle():void {
    this.storage.set('todoList', JSON.stringify(this.todoList));
  }
}
