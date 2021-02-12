import {Component, OnInit} from '@angular/core';
import {ChatService} from '../../service/chat.service';
import {MailMessageService} from '../../service/mail-message.service';
import {InboxService} from '../../service/inbox.service';
import {MailThread} from '../../shared/MailThread';
import {NewMessageNotification} from '../../shared/NewMessageNotification';
import {RxStompService} from '@stomp/ng2-stompjs';

@Component({
  selector: 'app-mail-client',
  templateUrl: './mail-client.component.html',
  styleUrls: ['./mail-client.component.css']
})
export class MailClientComponent implements OnInit {
  mailThreads: MailThread[] = [];
  openedThread: MailThread;

  constructor(private inboxService: InboxService) {
  }

  ngOnInit(): void {
    this.loadData();
    this.inboxService.subscribeForReply().subscribe(message => {
      this.loadData();
    });
  }

  private loadData(): void {
    this.inboxService.getMailThreads().subscribe(res => {
      this.mailThreads = res;
    });
  }

  public openThread(openedThread: MailThread): void {
    this.openedThread = openedThread;
  }

}
