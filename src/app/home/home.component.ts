import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports:[FormsModule,HttpClientModule],
  standalone:true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  formdata: any = {};

  constructor(private http: HttpClient, private router: Router) {}



  handleSubmit(main:any) {
    this.formdata=main.value;console.log(this.formdata);
    this.http.post('http://localhost:3000/generate-token', this.formdata).subscribe(
      (response: any) => {  

      },
      (error: any) => {
        console.log('Login failed:', error);
      }
    );

    
  
  }
}

