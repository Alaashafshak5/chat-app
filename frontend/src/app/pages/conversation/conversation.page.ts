import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MessageComponent } from 'src/app/components/message/message.component';


@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MessageComponent]
})

export class ConversationPage implements OnInit {

  name: string = 'Sender';
  message: string | undefined;
  chats = [
    {id: 1, sender: true, message: 'hi'},
    {id: 2, sender: false, message: 'hi there!'},
  ];

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {}


}
