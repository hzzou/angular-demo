import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ChangeColorDirective } from '../directive/change-color.directive';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit, OnChanges {
  selectedVal: string = '99';
  constructor(public themeService: ThemeService) {}

  // 在ng第一次显示数据绑定和组件的输入属性之后调用 初始化组件/指令时也调用
  ngOnInit(): void {
    this.themeService.themeChange.subscribe(res => {
      console.log(res);
    });
  }

  // ng重新设置 数据绑定的 输入属性时的 响应
  // 在ngOnInit之前会调用 以及绑定的输入属性发生变化时也会调用
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.selectedVal);
  }

  // 紧跟ngOngChanges()或者首次ngOnInit()
  // 在ng不愿自己检测时做出反应
  ngDoCheck(): void {

  }

  // 当把外部内容投进组件视图之后调用 或包含该指令(指令使用这个周期)的视图
  ngAfterContentInit(): void {}

  // 检查完投到组件的内容之后调用
  ngAfterContentChecked(): void {}

  // 初始化完组件视图及其子视图 或包含该指令(指令使用这个周期)的视图
  ngAfterViewInit(): void {}

  // ng做完视图和子视图的检测之后调用 或包含该指令(指令使用这个周期)的视图
  ngAfterViewChecked(): void {}

  // 每次指令或者组件销毁前调用 防止内存泄漏
  ngOnDestroy(): void {}

  onSearch(value: string): void{
    console.log(value)
  }

  onOptionChange(value: string): void{
    console.log(value)
    this.selectedVal = value;
  }
}
