import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './adminpages/admin/admin.component';
import { AdminmainComponent } from './adminpages/adminmain/adminmain.component';
import { LogadminComponent } from './adminpages/logadmin/logadmin.component';
import { AboutComponent } from './pages/about/about.component';
import { ApartmentsComponent } from './pages/apartments/apartments.component';
import { BookingComponent } from './pages/booking/booking.component';
import { CarrersComponent } from './pages/carrers/carrers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './pages/forgotpassword/forgotpassword.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SingleapartmentComponent } from './pages/singleapartment/singleapartment.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { ViewpropComponent } from './pages/viewprop/viewprop.component';
import { VillasComponent } from './pages/villas/villas.component';

const routes: Routes = [
  {
    path : 'login',component:LoginComponent 
  },
  {
    path : 'register',component:RegisterComponent
  },
  {
    path : 'dashboard',component:DashboardComponent
  },
  {
    path : 'about',component:AboutComponent
  },
  {
    path : 'villas',component:VillasComponent
  },
  {
    path : 'apartments',component:ApartmentsComponent
  },
  {
    path : '',component:HomeComponent
  },
  {
    path : 'contact',component:ContactComponent
  },
  {
    path : 'singlepage',component:SinglepageComponent
  },
  {
    path : 'singleapartment',component:SingleapartmentComponent
  },
  {
    path : 'booking',component:BookingComponent
  },
  {
    path : 'forgotpassword',component:ForgotpasswordComponent
  },
  {
    path : 'viewprop',component:ViewpropComponent
  },
  {
    path : 'admin',component:AdminComponent
  },
  
  {
    path : 'carrers',component:CarrersComponent
  },
  {
    path : 'adminmain',component:AdminmainComponent
  },
  {
    path : 'logadmin',component:LogadminComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
