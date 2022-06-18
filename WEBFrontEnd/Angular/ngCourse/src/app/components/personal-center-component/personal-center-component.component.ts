import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // 引入ActivatedRoute

@Component({
  selector: 'app-personal-center-component',
  templateUrl: './personal-center-component.component.html',
  styleUrls: ['./personal-center-component.component.scss']
})
export class PersonalCenterComponent implements OnInit {
  constructor(
    private route: ActivatedRoute, // 依赖注入这个服务
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  goToGoodsList() {
    // this.router.navigate([`goodsList`],{queryParams:{name: 'leeJee', age:10}});
    this.router.navigateByUrl('goodsList?name=leeJee&age=20');
  }

}
