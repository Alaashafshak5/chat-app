import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  imports: [IonicModule, CommonModule, FormsModule],

})
export class MessageComponent  implements OnInit {
  @Input() chat: any;
  currentUserId = 1
  constructor() { }

  ngOnInit() {
    console.log(this.chat)
  }

}
