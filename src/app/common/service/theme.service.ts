import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class ThemeService {
  public themeChange = new ReplaySubject<any>(); // BehaviorSubject必须给返回值初始值

  constructor() {}

  saveColor(color: any): void {
    this.themeChange.next(color);
  }
}
