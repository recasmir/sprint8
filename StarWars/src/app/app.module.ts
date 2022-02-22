import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { defaultSimpleModalOptions, SimpleModalModule } from 'ngx-simple-modal';


import { StarshipsComponent } from './starships/starships.component';
import { ShipsComponent } from './ships/ships.component';
import { PaginaPipe } from './pipes/pagina.pipe';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './shared/home/home.component';
import { LoginComponent } from './usuaris/login/login.component';
import { SignupComponent } from './usuaris/signup/signup.component';
import { ModalsService } from './usuaris/services/modals.service';
import { AuthService } from './usuaris/services/auth.service';
import { AuthToStarshipsService } from './shared/services/auth-to-starships.service';



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
    FormsModule,
    SimpleModalModule.forRoot({ container: 'modal-container' }, {
      ...defaultSimpleModalOptions, ...{
        closeOnEscape: true,
        closeOnClickOutside: true,
        wrapperDefaultClasses: 'o-modal o-modal--fade',
        wrapperClass: 'o-modal--fade-in',
        animationDuration: 300,
        autoFocus: true,
        draggable: true
      }
    })

  ],
  providers: [
    ModalsService,
    AuthService,
    AuthToStarshipsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
