import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' }, //pathMatch:'full'表示路径要完全匹配
  {path:'index', component:IndexComponent},
  {path:'login', component:LoginComponent},
  {path:'todo', component:TodoComponent}
];

// 打包后报 Unhandled Navigation Error,添加{ useHash: true } <base href="/"> 去掉 /
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
