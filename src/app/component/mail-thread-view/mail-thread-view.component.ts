import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MailThread} from '../../shared/MailThread';
import {MailThreadService} from '../../service/mail-thread.service';
import {User} from '../../shared/User';
import {MailMessage} from '../../shared/MailMessage';
import {ToastrService} from 'ngx-toastr';
import {InboxService} from '../../service/inbox.service';
import {NewMessageNotification} from '../../shared/NewMessageNotification';

@Component({
  selector: 'app-mail-thread-view',
  templateUrl: './mail-thread-view.component.html',
  styleUrls: ['./mail-thread-view.component.css']
})
export class MailThreadViewComponent implements OnInit, OnChanges {
  @Input()
  thread: MailThread;
  members: Array<User>;
  messages: Array<MailMessage>;
  response: string;

  replyActive: boolean;

  constructor(private mailThreadService: MailThreadService,
              private inboxService: InboxService) {
  }

  ngOnInit(): void {
    this.mailThreadService.getMembersByThreadId(this.thread.id)
      .subscribe(res => this.members = res);
    this.mailThreadService.getMessagesByThreadId(this.thread.id)
      .subscribe(res => this.messages = res);
    this.inboxService.subscribeForReply().subscribe(message => {
      const parsedMsg: NewMessageNotification = JSON.parse(message.body);
      if (parsedMsg.threadId === this.thread.id) {
        this.messages.push(new MailMessage(parsedMsg.id, parsedMsg.content, parsedMsg.createdAt));
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.replyActive = false;
    this.response = '';
    this.mailThreadService.getMembersByThreadId(this.thread.id)
      .subscribe(res => this.members = res);
    this.mailThreadService.getMessagesByThreadId(this.thread.id)
      .subscribe(res => this.messages = res);
  }

  public replySwitch(): void {
    this.replyActive = !this.replyActive;
  }

  public sendMessage(): void {
    this.mailThreadService.sendMessage(this.response, this.thread.id).subscribe(res => {
      this.messages.push(res);
      this.response = '';
    });
  }
}
