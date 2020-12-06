import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../service/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {
  }

  public sendMessage() {
    this.chatService.onSendMessage();
  }

}
