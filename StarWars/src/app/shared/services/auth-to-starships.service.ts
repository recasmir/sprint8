import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { loggedUsers } from 'src/app/interfaces/usuari';

import { ModalsService } from 'src/app/usuaris/services/modals.service';
import { AuthService } from './../../usuaris/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthToStarshipsService {

  loggedInUsers:loggedUsers[];

  constructor(private router:Router,
              private modalsService:ModalsService,
              private authService:AuthService) { 
   
    this.loggedInUsers=JSON.parse(localStorage.getItem('Logged in users')!) || [];
  }

  goToStarships(){
    if(this.loggedInUsers.length===0){
      this.modalsService.openLogInModal();
    }else{
      this.authService.auth_open = true;
      this.router.navigate(['./starships']);
    }
  }
}
