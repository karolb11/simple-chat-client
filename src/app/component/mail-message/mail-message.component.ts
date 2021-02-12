import {Component, Inject, Input, OnInit} from '@angular/core';
import {MailMessage} from '../../shared/MailMessage';
import {User} from '../../shared/User';
import {MailMessageService} from '../../service/mail-message.service';

@Component({
  selector: 'app-mail-message',
  templateUrl: './mail-message.component.html',
  styleUrls: ['./mail-message.component.css']
})
export class MailMessageComponent implements OnInit {

  @Input()
  message: MailMessage;
  author: User;

  constructor(private mailMessageService: MailMessageService) {
  }

  ngOnInit(): void {
    this.mailMessageService.findAuthorByMessageId(this.message.id)
      .subscribe(res => this.author = res);
  }

}
