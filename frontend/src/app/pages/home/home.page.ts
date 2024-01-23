import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  users:any = [];
  imgUrl = environment.imgUrl

  constructor(private http: HttpClient) {}

  getContacts(): Observable<Object> {
    const headerDict = {
      'Access-Control-Allow-Headers': '*',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    return this.http.get(`${environment.baseUrl}/user/get-all`, requestOptions);
  }
  ngOnInit() {
    this.getContacts().subscribe((res: any) => {console.log(res); 
    this.users = [...this.users, ...res.data]
    });
  }
}
