import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AngularFireModule } from '@angular/fire/compat';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { VillasComponent } from './pages/villas/villas.component';
import { ApartmentsComponent } from './pages/apartments/apartments.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './units/footer/footer.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { SingleapartmentComponent } from './pages/singleapartment/singleapartment.component';
import { BookingComponent } from './pages/booking/booking.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    VillasComponent,
    ApartmentsComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    SinglepageComponent,
    SingleapartmentComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
