import {AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MailMessage} from '../../shared/MailMessage';
import {MailThread} from '../../shared/MailThread';
import {User} from '../../shared/User';
import {MailThreadService} from '../../service/mail-thread.service';
import {MailMessageService} from '../../service/mail-message.service';
import {NewMessageNotification} from '../../shared/NewMessageNotification';

@Component({
  selector: 'app-mail-thread',
  templateUrl: './mail-thread.component.html',
  styleUrls: ['./mail-thread.component.css']
})
export class MailThreadComponent implements OnInit {

  @Input()
  mailThread: MailThread;
  newestMessage: MailMessage;
  newestMessageAuthor: User;
  members: Array<User>;

  constructor(private mailThreadService: MailThreadService,
              private mailMessageService: MailMessageService) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.mailThreadService.getLatestMessageByThreadId(this.mailThread.id).subscribe(res => {
      this.newestMessage = res;
      this.mailMessageService.findAuthorByMessageId(this.newestMessage.id)
        .subscribe(res => this.newestMessageAuthor = res);
    });
  }
}
