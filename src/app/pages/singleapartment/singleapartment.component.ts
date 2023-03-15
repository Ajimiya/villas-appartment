import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-singleapartment',
  templateUrl: './singleapartment.component.html',
  styleUrls: ['./singleapartment.component.css']
})
export class SingleapartmentComponent {
  constructor(private router:Router,private hero:HeroService){}
  apartments = this.hero.giveData()
  singleapartment:any

  ngOnInit(){
    let id=Number(localStorage.getItem('id'))
    this.singleapartment=this.apartments.filter(e=>e.id==id)
    console.log("name",this.singleapartment)

    
  }
  register(){
    alert('YOU MUST REGISTER FIRST..!');
    this.router.navigateByUrl('register');
  }


}
