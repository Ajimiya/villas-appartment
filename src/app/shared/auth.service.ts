import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth,private router: Router) { }

  //Login method

  login(email : string , password : string){
   this.fireauth.signInWithEmailAndPassword(email,password).then( ( ) =>{
    localStorage.setItem('token','true');
    this.router.navigateByUrl('booking');
    // this.router.navigate(['singleapartment'])

   }, err =>{
      alert(err.message);
      this.router.navigate(['/login']);
   })
  }

  //Register

  register(email : string, password : string){
    this.fireauth.createUserWithEmailAndPassword(email,password).then( () =>{
      alert('Restration successful');
    this.router.navigate(['/login']);  
    }, err =>{
      alert(err.message);
      this.router.navigate(['/register']);
      
    })
  }
}
