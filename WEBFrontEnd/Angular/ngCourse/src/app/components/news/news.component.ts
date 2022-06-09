import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  // public title:string = "news Titles"
  // public content:string = "news works!"
  // public可以省略, 默认就为public
  title:string = "news Titles"
  content:string = "news works!"


  constructor() { }

  ngOnInit(): void {
  }
 
}
