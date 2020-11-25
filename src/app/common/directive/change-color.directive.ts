import {
  Directive,
  ElementRef,
  Input,
  Output,
  HostListener,
  OnInit,
  OnChanges,
  SimpleChanges,
  HostBinding,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';


@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective implements OnInit, OnChanges {
  constructor(private el: ElementRef,
              private cd: ChangeDetectorRef,
              private sanitizer: DomSanitizer) {

    }

  @Input('bgColor') bgColor: string;
  @Input('classWidget') classWidget: boolean;

  private ipt;

  private obj = {};

  @HostBinding('style.background') get background() {
    return this.bgColor;
  }

  // 根据此处的命名决定class是什么名字
  @HostBinding('class.wid') get classWid() {
    return this.classWidget;
  }

  ngOnInit(): void {
    if (this.el.nativeElement.querySelector('input')){
      this.ipt = this.el.nativeElement.querySelector('input');
      console.log(this.ipt.style);
      // this.ipt.style['color'] = '#f00';
      this.cd.detectChanges();
      this.cd.markForCheck();
      // this.sanitizer.bypassSecurityTrustStyle()
    }

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('===================document=================');
    // console.log(document.styleSheets);
    // console.log(typeof(document.styleSheets));
    console.log('====================================');


    // const sheet = document.createStyleSheets();
    // console.log(sheet)
    // sheet.owningElement.id = 'na-over';

    console.log(Object.keys(this.obj).length);
    if (Object.keys(this.obj).length > 0){
      console.log(123);
      console.log('bu');
    }
    else{
      console.log(this.obj);
      console.log('空');
    }


    console.log(this.el);
    console.log(this.el.nativeElement.querySelector('input'));

    if (this.el.nativeElement.querySelector('input')) {
      this.ipt = this.el.nativeElement.querySelector('input');
      console.log(this.ipt.style);
      this.ipt.style.color = '#ff0000';
      this.cd.detectChanges();
      this.cd.markForCheck();
    }
    console.log(this.classWidget);
    console.log(this.bgColor);
    console.log(this.classWid);
    // this.classWid = true;
    // this.classWidget = true;
  }

  changeColor(bgColor: string): void {
    console.log(this.el);
    // console.log(this.el.nativeElement)
    // this.el.nativeElement.style.backgroundColor = bgColor;
  }
}
