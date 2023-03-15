import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-villas',
  templateUrl: './villas.component.html',
  styleUrls: ['./villas.component.css']
})
export class VillasComponent {

  constructor(private router:Router,private hero:HeroService){}

items=this.hero.giveData1()
  gotoHere(id:any)
  {
 
    localStorage.setItem('id',id);
    this.router.navigate(['./singlepage']);
  }

}
