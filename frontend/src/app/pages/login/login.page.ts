import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage implements OnInit {
  users: any = [];
  imgUrl = environment.imgUrl;

  constructor(private http: HttpClient, private router: Router) {}

  getContacts(): Observable<Object> {
    return this.http.get(`${environment.baseUrl}/user/get-all`);
  }

  login(id: number){
    this.router.navigateByUrl(`/home`);
    environment.currentUserId = id
  }

  ngOnInit() {
    this.getContacts().subscribe((res: any) => {
      this.users = [...this.users, ...res.data];
    });
  }
}
