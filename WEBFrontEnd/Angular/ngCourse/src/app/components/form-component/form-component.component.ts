import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {

  public peopleInfo:any = {
    username: 'LeeJee',
    gender: 'woman',
    citys: [
      '北京', '西京', '东京', '南京'
    ],
    curCity: '西京',
    hobby: [
      {
        title: '篮球',
        checked: false
      },
      {
        title: '足球',
        checked: true
      },
      {
        title: '英语阅读',
        checked: false
      },
    ],
    markInfo: '',
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  doSubmit() {
    // DOM操作获取值
    // let username:any = document.getElementById('usernameId');
    // console.log(username.value);

    console.log(this.peopleInfo);
    
  }

}
