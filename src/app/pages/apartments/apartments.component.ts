import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  constructor(private router:Router,private hero:HeroService) {}
  items=this.hero.giveData()
  gotohere(id:any)
  {
    localStorage.setItem('id',id);
    this.router.navigate(['/singleapartment']);
  }
       

}
