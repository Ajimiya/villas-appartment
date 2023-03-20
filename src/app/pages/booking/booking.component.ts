import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { Firestore,collection,addDoc} from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  ThisForm!:FormGroup;
  // fb: any;
  // auth: any;
  constructor(private fb:FormBuilder ,private router:Router,private auth:AuthService,private firestore : Firestore) {

 
  
    this.ThisForm=this.fb.group({
    Name:['',[Validators.required]],
    Email:['',[Validators.required]],
    Phone:['',[Validators.required]],
    Message:['',[Validators.required]],
    
  })
}

  addp(){
    const detail = this.ThisForm.value;
    console.log(detail);
    this.auth.addp(detail).then((res: any)=>{
      if(res){
        alert('Submit Successfully')
        this.ThisForm.reset();
        this.router.navigate(['/'])
      }
      else{
        console.log('Data Not Added ')
      }
    })
}
 

  
}

