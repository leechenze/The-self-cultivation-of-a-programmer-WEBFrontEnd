import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dom-component',
  templateUrl: './dom-component.component.html',
  styleUrls: ['./dom-component.component.scss']
})
export class DomComponentComponent implements OnInit {

  public asideFlag:boolean = false;
  // ViewChild 获取Dom节点
  @ViewChild('viewChildBox', { static: true }) viewChildBoxRef:ElementRef;
  @ViewChild('asideCom', { static: true }) asideComRef:ElementRef;

  constructor() {

  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // DOM节点加载完成触发;
    // 获取Dom元素在 ngAfterViewInit 中, 以解决附有指令绑定的Dom无 法获取的问题;
    // console.log(document.getElementById('getDom'));

    // ViewChild 获取Dom节点;
    console.log(this.viewChildBoxRef);
    console.log(this.viewChildBoxRef.nativeElement.innerHTML);
    this.viewChildBoxRef.nativeElement.style.cssText += 'height: 100px';
    this.viewChildBoxRef.nativeElement.style.cssText += 'width: 100px';
    this.viewChildBoxRef.nativeElement.style.cssText += 'background-color: red';
  }

  toggleHandleAside() {
    if(this.asideFlag){
      this.asideComRef.nativeElement.style.transform = 'translate(200px,0)';
    }else{
      this.asideComRef.nativeElement.style.transform = 'translate(0,0)';
    }
    this.asideFlag=!this.asideFlag;
  }

  run():string {
    return 'appDomComponentRef 中的Run方法';
  };

}
