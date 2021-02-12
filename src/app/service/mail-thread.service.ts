import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Consts} from '../shared/Consts';
import {MailThread} from '../shared/MailThread';
import {MailMessage} from '../shared/MailMessage';
import {User} from '../shared/User';
import {RxStompService} from '@stomp/ng2-stompjs';

@Injectable({
  providedIn: 'root'
})
export class MailThreadService {

  constructor(private http: HttpClient) {
  }

  getLatestMessageByThreadId(threadId: number): any {
    const URL = Consts.API_URL + '/mail-thread/' + threadId + '/message/newest';
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', `application/json`)
    };
    return this.http.get<MailMessage>(URL, options);
  }

  getMessagesByThreadId(threadId: number): any {
    const URL = Consts.API_URL + '/mail-thread/' + threadId + '/message';
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', `application/json`)
    };
    return this.http.get<Array<MailMessage>>(URL, options);
  }

  getMembersByThreadId(threadId: number): any {
    const URL = Consts.API_URL + '/mail-thread/' + threadId + '/members';
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', `application/json`)
    };
    return this.http.get<Array<User>>(URL, options);
  }

  sendMessage(messageContent: string, threadId: number): any {
    const URL = Consts.API_URL + '/mail-thread/' + threadId + '/message';
    const postData = {
      content: messageContent
    };
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', `application/json`)
    };
    return this.http.post<MailMessage>(URL, postData, options);
  }
}
