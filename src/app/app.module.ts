import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthenticationInterceptor} from './auth/AuthenticationInterceptor';
import { AppRoutingModule } from './app-routing.module';
import { ChatComponent } from './component/chat/chat.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {Consts} from './shared/Consts';
import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from '@stomp/ng2-stompjs';
import { myRxStompConfig } from './shared/myRxStompConfig';
import { MessagesComponent } from './component/messages/messages.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ChatComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true},
    {provide: InjectableRxStompConfig, useValue: myRxStompConfig},
    {provide: RxStompService, useFactory: rxStompServiceFactory, deps: [InjectableRxStompConfig]},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
