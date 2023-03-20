import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Details } from 'src/app/interface/details';
import { Partner } from 'src/app/interface/newdetail';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-adminmain',
  templateUrl: './adminmain.component.html',
  styleUrls: ['./adminmain.component.css']
})
export class AdminmainComponent {

  details!:Details[];
  detail!:Partner[];
  // description!:Job[];

  
  constructor(private router :Router, private auth:AuthService){}

  ngOnInit(){
    this.get();
    this.getp();
    
  }

//collection fetch and intilize
get(){
  this.auth.get().subscribe((data:Details[])=>{
  console.log(data)
  this.details=data;
  })
}
add(){
  this.router.navigate(['/booking']);

}




delete(id:any){
  let okConfirm =confirm("Are you sure ?")
  if(okConfirm){
    this.auth.delete(id)


  }
  alert('delete');
}

logout(){
  alert('do you want to logout ?')
  this.router.navigate(['/loginadmin'])
}


//collection fetch and intilize
getp(){
this.auth.getp().subscribe((data:Partner[])=>{
console.log(data)
this.detail=data;
})
}
addp(){
this.router.navigate(['/partner']);

}




deletep(id1:any){
let okConfirm =confirm("Are you sure ?")
if(okConfirm){
  this.auth.delete(id1)

}
alert('delete');
}

}
