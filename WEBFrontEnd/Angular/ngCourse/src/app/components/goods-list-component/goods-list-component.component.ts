import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // 引入ActivatedRoute
import {GoodsListService} from './goods-list-component.service';


@Component({
  selector: 'app-goods-list-component',
  templateUrl: './goods-list-component.component.html',
  styleUrls: ['./goods-list-component.component.scss'],
  providers: [GoodsListService]
})
export class GoodsListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, // 依赖注入这个服务
    private router:Router,
    public goodsListService:GoodsListService
  ) { }

  // 在初始化的生命周期中去获取url的路由信息
  public ngOnInit(): void {
    // 第一种获取参数的方式
    const params = this.route.snapshot.params;
    const queryParams = this.route.snapshot.queryParams;
    console.log(params);
    console.log(queryParams);
    
    // 第二种获取参数的方式
    this.route.params.subscribe(params => {
      console.log(params);
    });
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
  }

  goToPersonalPage():void {
    // this.router.navigate([`personalCenter`],{queryParams:{name: 'leeJee', age:40}});
    this.router.navigateByUrl('personalCenter?name=leeJee&age=30');
  }

  httpSendHandle() :void {
    this.goodsListService.getHttpResult('12','zs').subscribe(data => {
      console.log(data);
    })
  }
  
  
}
