import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [DatePipe],
})
export class HomePage implements OnInit {
  users: any = [];
  online: any = [];
  imgUrl = environment.imgUrl;
  currentUserId = environment.currentUserId;

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe,
    private router: Router,
  ) {}

  getFormattedDate(date: string | number | Date) {
    return this.datePipe.transform(date, 'HH:mm');
  }

  getContacts(): Observable<Object> {
    return this.http.get(`${environment.baseUrl}/user/get-user-contacts/${this.currentUserId}`);
  }

  goToChat(id: number) {
    this.router.navigateByUrl(`/conversation/${id}`);
  }

  ngOnInit() {
    this.getContacts().subscribe((res: any) => {
      console.log(res);
      this.users = [...this.users, ...res.data];
      this.online = res.data.filter(
        (element: { online: number }) => element.online === 1
      );
    });
  }
}
