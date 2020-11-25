import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //provides this service in the root ModuleInjector 表示在根moduleInjector下提供此服务
})
export class AuthService {

  constructor() { }

  loginWithCredentials(user:string, pass:string):boolean{
    if(user == 'hzlzh'){
      return true;
    }

    return false;
  }
}
