import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: any;
  token:any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
   
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
    this.http.get('http://localhost:3000/html-page', { headers }).subscribe(
      response => {
        this.user = response
        console.log(this.user)
      },
      error => {
        console.log('Profile loading failed:', error);
      }
    );
  }
}
