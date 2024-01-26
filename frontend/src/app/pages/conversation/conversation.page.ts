import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MessageComponent } from 'src/app/components/message/message.component';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MessageComponent],
})
export class ConversationPage implements OnInit {
  id: number = 0;
  user: any;
  name: string = 'Sender';
  message: string | undefined;
  messages: any = []
  imgUrl = environment.imgUrl;
  currentUserId = localStorage.getItem("id")


  constructor(private http: HttpClient, private router: ActivatedRoute, private socket: Socket,) {}

  getDetails(id: number) {
    return this.http.get(`${environment.baseUrl}/user/get/${this.currentUserId}/${id}`);
  }

  ngOnInit() {
    this.socket.connect();
    this.id = this.router.snapshot.params['id'];
    this.getDetails(this.id).subscribe((res: any) => {
      console.log(res)
      this.user = res.data.user;
      this.messages = res.data.messages
    });
    this.socket.fromEvent('message').subscribe((message: any) => {
      this.messages.push(message);
      console.log(message)
    });
  }

  sendMessage() {
    this.socket.emit('sendMessage', { senderId: this.currentUserId, receiverId: this.id, text: this.message });
    this.message = '';
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }
}
