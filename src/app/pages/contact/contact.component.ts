import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { Firestore,collection,addDoc} from '@angular/fire/firestore';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private router:Router,private hero:HeroService,private firestore : Firestore) {}
      gotoHere(id:any)
      {
        localStorage.setItem('id',id);
        this.router.navigate(['/singlepage']);
      }
      
      submit(){
        alert('Submitted Sucessfully')
        this.router.navigateByUrl('homepage')
      }

      addData(f:any)
      {
         const collectionInstance = collection(this.firestore,'users');
        addDoc(collectionInstance,f.value).then(() =>{
          console.log('Data Saved Sucessfully')
        })
        .catch((err)=>{
          console.log(err); 
        })
      }

}
