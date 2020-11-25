import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd';

import { NgZorroAntdModule } from './ng-zorro-antd/ng-zorro-antd.module';
import { ColorSketchModule } from 'ngx-color/sketch';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';

import { AuthService } from './core/auth.service';

import { TodoComponent } from './todo/todo.component';
import { IndexComponent } from './index/index.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { AsideComponent } from './common/aside/aside.component';
import { SectionComponent } from './common/section/section.component';
import { WidgetComponent } from './common/widget/widget.component';
import { ChangeColorDirective } from './common/directive/change-color.directive';

@NgModule({
  // 组件,指令，管道等(只能属于一个模块)
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent,
    IndexComponent,
    NavigationComponent,
    AsideComponent,
    SectionComponent,
    WidgetComponent,
    ChangeColorDirective
  ],
  // 模块
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgZorroAntdModule,
    ColorSketchModule,
    BrowserAnimationsModule
  ],
  // 依赖注入提供者列表
  providers: [
    // 命名为auth便于底下的模块引用
    { provide: 'auth', useClass: AuthService },
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  // 启动的根组件
  bootstrap: [AppComponent]
})
export class AppModule {}
