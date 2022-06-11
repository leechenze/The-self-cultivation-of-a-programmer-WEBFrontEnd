import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  set(key:string,value:string):void {
    localStorage.setItem(key,value);
  }
  get(key:string):any {
    return localStorage.getItem(key)
  }
  remove(key:string) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
}
