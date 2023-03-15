import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { Firestore,collection,addDoc} from '@angular/fire/firestore';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  constructor(private router:Router,private hero:HeroService,private firestore : Firestore) {}

  submit(){
    alert('Booked Sucessfully....We will reach you soon..')
    this.router.navigateByUrl('homepage')
  }

  addData(f:any)
  {
     const collectionInstance = collection(this.firestore,'booking');
    addDoc(collectionInstance,f.value).then(() =>{
      console.log('Data Saved Sucessfully')
    })
    .catch((err)=>{
      console.log(err); 
    })
  
  }
}
