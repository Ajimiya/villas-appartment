import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

  
    email :  string = '';
     constructor(private auth : AuthService){}
    
     
  forgotpassword()
  {
    this.auth.forgotpassword(this.email);
    this.email = '';
  }
  }


