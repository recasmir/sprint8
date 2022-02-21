import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NgForm } from '@angular/forms';
import { loggedUsers, Usuari } from 'src/app/interfaces/usuari';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  closeResult: string='';

  @ViewChild('logInForm') logInForm!: NgForm;

  usuariIn: loggedUsers={
    email:'',
    password:''
  }

  needSignUp:boolean=false;
  result:boolean=true;

  constructor(private modalService: NgbModal,
              private router:Router,
              private authService: AuthService
              ) {

   }

  ngOnInit(): void {
  }

  openLogin(content:any) {
    this.modalService.open(content, { centered: true });
  }

  logIn(){

    this.authService.verificacioLogIn(this.usuariIn.email, this.usuariIn.password);

    this.needSignUp=this.authService.needSignUpServ;
    this.result=this.authService.resultServ;
    console.log('result', this.result)

    this.router.navigate(['./starships'])
    
  }
    
  }


