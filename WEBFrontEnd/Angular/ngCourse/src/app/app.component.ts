/** 引入核心模块 */
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  /** 使用组件的名称 */
  selector: 'app-root',
  /** html */
  templateUrl: './app.component.html',
  /** css */
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngCourse';
  @ViewChild('appDomComponent') appDomComponentRef:any;
  
  /** 构造函数 */
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    console.log(this.appDomComponentRef.run());
  }
}
