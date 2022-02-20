import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Usuari } from 'src/app/interfaces/usuari';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  
  usuariIn={
    email:'',
    password:''
  }

  signedUpUsers:Usuari[];

  needSignUp:boolean=false;
  result:boolean=true;
  constructor(private router:Router) {

    this.signedUpUsers=JSON.parse(localStorage.getItem('Signed up users')!) || [];
   }

  
  auth_open:boolean=false;
  

  verificacioLogIn(email:string, password:string): Observable<boolean> | boolean{
  
    for( let user of this.signedUpUsers){

      console.log('entro al for')
      console.log('em' , email, 'pass', password)
      console.log('email user', user.email, 'pass user', user.password)
      if(email===user.email && password===user.password){
        console.log(`3- user name: ${user.email}, user password: ${user.password}`);
        
        this.auth_open = true;
        console.log('SERV auth_open', this.auth_open)
           
        return true
      }else{

        this.needSignUp=true;
        this.result=false;
        console.log('4- you need to sign up');
        this.auth_open = false;
        console.log('SERV auth_open', this.auth_open)
        
        }
      }
      return false
  }

}
