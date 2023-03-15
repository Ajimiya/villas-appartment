import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ApartmentsComponent } from './pages/apartments/apartments.component';
import { BookingComponent } from './pages/booking/booking.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SingleapartmentComponent } from './pages/singleapartment/singleapartment.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
