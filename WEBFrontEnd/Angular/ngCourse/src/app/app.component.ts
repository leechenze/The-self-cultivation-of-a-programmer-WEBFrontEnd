/** 引入核心模块 */
import { Component, ViewChild, ElementRef, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  /** 使用组件的名称 */
  selector: 'app-root',
  /** html */
  templateUrl: './app.component.html',
  /** css */
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges,AfterViewInit,OnDestroy{
  title:string = 'ngCourse';
  count:number = 0;
  paramId:number = 0;
  @ViewChild('appDomComponent') appDomComponentRef:any;

  // 在构造函数里不能获取最新的输入属性值
  constructor() {
    console.log("constructor",this.title);
  }
  
  // 在输入属性发生变化的时候调用(常用)
  ngOnChanges(): void {
    console.log("ngOnChanges",this.title);
  }
  
  // 属性和指令初始化完成调用(常用)
  ngOnInit(): void {
    console.log("ngOnInit");
  }
  
  // 首次变更检测完调用
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  
  // 投影初始化完调用
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  
  // 投影变更检测完调用
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  
  // 视图初始化完调用(常用)
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  
  // 视图变更检测完调用
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  
  // 组件销毁完调用(常用)
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
 
  
  
  // ngAfterViewInit(): void {
  //   console.log(this.appDomComponentRef.run());
  // }

  changeCount(value: number): void {
    this.count = value;
  }
  
}
