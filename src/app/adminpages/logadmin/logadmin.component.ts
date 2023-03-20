import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-logadmin',
  templateUrl: './logadmin.component.html',
  styleUrls: ['./logadmin.component.css']
})
export class LogadminComponent {
  email :  string = '';
  password : string = '';
  constructor(private auth :AuthService,private router:Router){}

  adminlogin()
  {
    
    if(this.email == ''){
      alert('please enter email')
       return;
    }
    if(this.password == ''){
      alert('please enter password')
       return;
    }
       
    this.auth.adminlog(this.email,this.password);
    this.email = '';
    this.password = '';
  }
}
