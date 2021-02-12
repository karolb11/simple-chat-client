import {Injectable} from '@angular/core';
import {RxStompService} from '@stomp/ng2-stompjs';
import {Message} from '../shared/Message';


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public receivedMessage: Message[] = [];

  constructor(private rxStompService: RxStompService) {
    this.watchTopics();
  }


  public onSendMessage(): void {
    const message = `Message generated at ${new Date}`;
    this.rxStompService.publish({destination: '/app/message', body: message});
  }


  watchTopics() {
    this.rxStompService.watch({destination: '/user/queue/errors'}).subscribe();
    this.rxStompService.watch({destination: '/user/queue/reply'})
      .subscribe(message => {
        const parsedMsg = JSON.parse(message.body);
        this.receivedMessage.push(parsedMsg);
      });
    this.rxStompService.watch({destination: '/topic/public'}).subscribe();
  }
}
