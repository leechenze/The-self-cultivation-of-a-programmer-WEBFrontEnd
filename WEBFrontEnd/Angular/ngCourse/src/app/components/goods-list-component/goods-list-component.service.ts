import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators'; // 此操作符是用来获取某个字段内容

@Injectable({
  providedIn: 'root'
})
export class GoodsListService {

  constructor(
    private http: HttpClient
  ) { }

  public getHttpResult(code: string, name: string): Observable<any> {
    const url: string = 'https://api.github.com/users/leechenze';  // 这是请求的地址
    return this.http.get(url, { params: { code, name } });
  }

  public postHttpResult(body: any): Observable<any> {
    const url: string = 'https://api.github.com/users/'; // 这是请求的地址
    return this.http.post(url, body);
  }
  
  
}
