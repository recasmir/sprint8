import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { loggedUsers, Usuari } from 'src/app/interfaces/usuari';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  signedUpUsers:Usuari[];
  loggedInUsers:loggedUsers[];
  needSignUpServ:boolean=false;
  resultServ:boolean=true;
  auth_open:boolean=false;

  constructor(private router:Router,
              private modalService: NgbModal) {

    this.signedUpUsers=JSON.parse(localStorage.getItem('Signed up users')!) || [];
   
   this.loggedInUsers=JSON.parse(localStorage.getItem('Logged in users')!) || [];
  }

  verificacioLogIn(email:string, password:string): boolean{

    let nouUsuariIn={
      email,
      password
    }

    this.signedUpUsers=JSON.parse(localStorage.getItem('Signed up users')!) || [];

    if(this.signedUpUsers.length===0){
      this.needSignUpServ=true;
      this.resultServ=false;
    }

    for( let user of this.signedUpUsers){

      if(email===user.email && password===user.password){

        this.loggedInUsers.push({...nouUsuariIn});

        localStorage.setItem('Logged in users', JSON.stringify(this.loggedInUsers));

        this.resultServ=true;
        
        this.auth_open = true;
        console.log('SERV auth_open', this.auth_open)
           
        return true
      }else{
        this.needSignUpServ=true;
        this.resultServ=false;
        this.auth_open = false;
        this.router.navigate(['./starships'])
        }
      }
      return false
  }

  estaAuth(): boolean{

    for(let signedUser of this.signedUpUsers){
      for(let loggedUser of this.loggedInUsers){
        if(signedUser.email===loggedUser.email && signedUser.password===loggedUser.password){
          return true
        }
      }
    }
    return false
  }

}
