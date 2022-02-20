import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NgForm } from '@angular/forms';
import { Usuari } from 'src/app/interfaces/usuari';
import { of } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../auth.guard';

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
              private router:Router,
              private authService: AuthService,
              private authGuard: AuthGuard) {

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
    this.authService.verificacioLogIn(this.usuariIn.email, this.usuariIn.password)
    this.router.navigate(['./starships'])
    
  }
    
  }


