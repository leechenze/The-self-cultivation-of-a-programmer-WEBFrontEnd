import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-communication-component',
  templateUrl: './communication-component.component.html',
  styleUrls: ['./communication-component.component.scss']
})
export class CommunicationComponentComponent implements OnInit {

  // 从父组件中接收showTitle;
  @Input() public showTitle: string;
  // 定义父组件的事件触发名称 changeCount;
  @Output() public changeCount:EventEmitter<number> = new EventEmitter<number>();

  curCount: number = 0;
  ngModelListener:string;
  
  constructor() {}

  ngOnInit(): void {}

  addCount(): void {
    this.curCount++;
    this.changeCount.emit(this.curCount);
  }
  ngModelListenerHandle(value: string): void {
    console.log(value);
  }

}
