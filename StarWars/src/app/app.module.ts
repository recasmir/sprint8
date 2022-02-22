import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { StarshipsComponent } from './starships/starships.component';
import { ShipsComponent } from './ships/ships.component';
import { PaginaPipe } from './pipes/pagina.pipe';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './usuaris/login/login.component';
import { SignupComponent } from './usuaris/signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    StarshipsComponent,
    ShipsComponent,
    PaginaPipe,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
