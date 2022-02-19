import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NgForm } from '@angular/forms';
import { Usuari } from 'src/app/interfaces/usuari';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  closeResult: string='';

  @ViewChild('logInForm') logInForm!: NgForm;

  usuariIn={
    email:'',
    password:''
  }

  signedUpUsers:Usuari[];

  needSignUp:boolean=false;
  result:boolean=true;

  constructor(private modalService: NgbModal,
              private router:Router) {

    this.signedUpUsers=JSON.parse(localStorage.getItem('Signed up users')!) || [];
   }

  ngOnInit(): void {
  }

  openLogin(content:any) {
    this.modalService.open(content, { centered: true });
  }

  logIn(){

    this.usuariIn={
      email:this.usuariIn.email,
      password:this.usuariIn.password
    }

    console.log(this.usuariIn);

    for( let user of this.signedUpUsers){
      if(this.usuariIn.email===user.email && this.usuariIn.password===user.password){
        this.router.navigate(['starships']);
        console.log(`user name: ${user.email}, user password: ${user.password}`);
        break;
      }else{
        this.needSignUp=true;
        this.result=false;
        console.log('you need to sign up');
        }
      }
      console.log(this.result);

      // this.usuariIn={
      //   email:'',
      //   password:''
      // }
    }
    
    
  }


