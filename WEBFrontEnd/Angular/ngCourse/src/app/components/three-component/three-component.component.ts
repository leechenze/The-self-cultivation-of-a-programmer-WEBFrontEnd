import { Component, OnInit } from '@angular/core';

interface renderUserType{
  username?: any,
  age?: number,
}

@Component({
  selector: 'app-three-component',
  templateUrl: './three-component.component.html',
  styleUrls: ['./three-component.component.scss']
})


export class ThreeComponentComponent implements OnInit {


  userName:String = 'LeeJee'


  
  public userInfo:any= {
    userAge: '20',
  }
  public msg:string;
  public dynamicTitle:string = 'this`s dynamic title';
  public htmlCon:string = "<h1>this`s an H1 Tag</h1>";
  public renderArr:Array<any> = ['111111', '222222', '333333', '444444', '555555', '666666'];
  public renderUser:Array<renderUserType> = [
    {
      username: 'LeeJee',
      age: 18,
    },
    {
      username: 'Obama',
      age: 20,
    },
    {
      username: 'Clinton',
      age: 30,
    },
  ];
  public localImgSrc: string = '../../../assets/01.jpg';
  public onLineImgSrc: string = '../../../assets/02.jpg';
  public flag:boolean = false;
  public orderStatus:number = 0; // 1,2,3
  public renderClassArr:Array<any> = ['111111', '222222', '333333'];
  public ngStyleAttr:string = 'orange';
  public today:Date = new Date();
  public eventText:string = '改变事件文本';
  public ngModelText:string = '';
  
  
  
  
  

  constructor() {
    this.msg = 'LeeJee is JavaScript developer';
  }

  ngOnInit(): void {
  }

  run() {
    this.eventText = '改变事件文本0000';
  }
  keyDownHandle(ev:any) {
    console.log(ev)
  }

}
