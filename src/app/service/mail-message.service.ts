import {Injectable} from '@angular/core';
import {MailMessage} from '../shared/MailMessage';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Consts} from '../shared/Consts';
import {User} from '../shared/User';

@Injectable({
  providedIn: 'root'
})
export class MailMessageService {
  constructor(private http: HttpClient) {
  }

  public findAuthorByMessageId(id: number): any {
    const URL = Consts.API_URL + '/mail-message/' + id + '/author';
    const options = {
      headers: new HttpHeaders()
        .set('Content-Type', `application/json`)
    };
    return this.http.get<User>(URL, options);
  }
}
