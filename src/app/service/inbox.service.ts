import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Consts} from '../shared/Consts';
import {ApiResponse} from '../shared/ApiResponse';
import {AuthService} from '../auth/auth.service';
import {MailThread} from '../shared/MailThread';
import {RxStompService} from '@stomp/ng2-stompjs';

@Injectable({
  providedIn: 'root'
})
export class InboxService {

  constructor(private http: HttpClient,
              private authService: AuthService,
              public rxStompService: RxStompService) {
  }

  public getMailThreads(): any {
    const userId = this.authService.getCurrentUserId();
    const URL = Consts.API_URL + '/user/' + userId + '/mail-thread';
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', `application/json`)
    };
    return this.http.get<Array<MailThread>>(URL, options);
  }

  public subscribeForReply(): any {
    return this.rxStompService.watch({destination: '/user/queue/reply'});
  }
}
