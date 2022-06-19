import { Injectable } from '@angular/core';
import {count, Observable} from 'rxjs';
import { map, filter} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  // 同步方法;
  getData() {
    return 'this is a getData';
  }

  // 回调方法获取异步数据
  getCallbackData(callback: Function) {
    setTimeout(() => {
      let info = 'this is a getCallbackData';
      callback(info);
      return info;
    },1000)
  }

  // Promise方法获取异步数据
  getPromiseData(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let info = 'this is a getPromiseData';
        resolve(info);
      },3000);
    })
  }

  // RxJs获取异步数据
  getRxJsData(): Observable<string> {
    return new Observable(observer => {
      setTimeout(() => {
        let info:string = 'this is a getRxJsData';
        observer.next(info);
        // observer.error('错误信息');
      },3000);
    })
  }

  // RxJs多次执行
  getRxJsIntervalData(): Observable<string> {
    let count:number = 0;
    return new Observable(observer => {
      setInterval(() => {
        count ++;
        let info:string = 'this is a getRxJsIntervalData' + count;
        observer.next(info);
      },1000);
    })
  }

  // RxJs工具方法
  getRxJsGetDataNum(): Observable<number> {
    let count:number = 0;
    return new Observable(observer => {
      setInterval(() => {
        count ++;
        observer.next(count); 
      },1000)
    })
  }  
}
