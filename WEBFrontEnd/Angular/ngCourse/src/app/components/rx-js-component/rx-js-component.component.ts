import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-rx-js-component',
  templateUrl: './rx-js-component.component.html',
  styleUrls: ['./rx-js-component.component.scss'],
})
export class RxJsComponent implements OnInit {

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    // 同步方法获取
    let data = this.request.getData();
    console.log(data);

    // 回调函数获取异步数据
    this.request.getCallbackData((data:string) => {
      console.log(data);
    });

    // Promise获取异步数据
    this.request.getPromiseData().then((data:string) => {
      console.log(data);
    })

    // RxJs获取异步数据
    let streem = this.request.getRxJsData();
    let tempStreem = streem.subscribe((data:string) => {
      console.log(data);
    })

    // RxJs取消订阅
    setTimeout(() => {
      // unsubscribe后 Observable 会中途撤回
      tempStreem.unsubscribe();
    },1000)
    
    // RxJs多次执行
    // this.request.getRxJsIntervalData().subscribe((data:string) => {
    //   console.log(data);
    // })

    // RxJs工具方法
    // let streem1 = this.request.getRxJsGetDataNum();
    // streem1.pipe(
    //   filter((value:number):boolean => {
    //     if(value % 2 === 0){
    //       return true;
    //     }
    //     return false;
    //   }),
    //   map((value:number):number => {
    //     return value * value;
    //   })
    // ).subscribe((data:number) => {
    //   console.log(data);
    // })
  }
  public ngOnDestroy(): void {
    // 一般取消订阅在销毁周期时执行 streem.unsubscribe();
  }
}
