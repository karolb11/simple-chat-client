import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginPageComponent} from './component/login-page/login-page.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthenticationInterceptor} from './auth/AuthenticationInterceptor';
import {AppRoutingModule} from './app-routing.module';
import {ChatComponent} from './component/chat/chat.component';
import {InjectableRxStompConfig, RxStompService, rxStompServiceFactory} from '@stomp/ng2-stompjs';
import {myRxStompConfig} from './shared/myRxStompConfig';
import {MailClientComponent} from './component/mail-client/mail-client.component';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {MailMessageComponent} from './component/mail-message/mail-message.component';
import {MailThreadViewComponent} from './component/mail-thread-view/mail-thread-view.component';
import {MailThreadComponent} from './component/mail-thread/mail-thread.component';
import {TransformDatePipe} from './shared/transform-date.pipe';
import {AvatarModule} from 'ngx-avatar';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ChatComponent,
    MailClientComponent,
    SidebarComponent,
    MailMessageComponent,
    MailThreadComponent,
    MailThreadViewComponent,
    TransformDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AvatarModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true},
    {provide: InjectableRxStompConfig, useValue: myRxStompConfig},
    {provide: RxStompService, useFactory: rxStompServiceFactory, deps: [InjectableRxStompConfig]},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
