import { Component } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {
  constructor(private router:Router,private hero:HeroService){}
  villas=this.hero.giveData1()
  singlepage:any

  ngOnInit(){
    let id=Number(localStorage.getItem('id'))
    this.singlepage=this.villas.filter(e=>e.id==id)
    console.log("name",this.singlepage)

    
  }
  register(){
    alert('YOU MUST REGISTER FIRST..!');
    this.router.navigateByUrl('register');
  }

}
