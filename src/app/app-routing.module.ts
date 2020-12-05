import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './component/login-page/login-page.component';
import {ChatComponent} from './component/chat/chat.component';

const routes: Routes = [
  { path: 'sign-in', component: LoginPageComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
