
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SimpleModalComponent } from 'ngx-simple-modal';

import { Usuari } from './../../interfaces/usuari';
import { AuthService } from '../services/auth.service';
import { ModalsService } from '../services/modals.service';

export interface AlertModel {
  title?: string;
  message: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent extends SimpleModalComponent<AlertModel, null> implements AlertModel {

  title: string = '';
  message: string = '';

  signUpForm:FormGroup = this.fb.group({
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    email:['', Validators.required],
    password:['', Validators.required],
  })

  signedUpUsers:Usuari[]=[];
  canClose:boolean=true;
  usuari:Usuari={
    firstName:'',
    lastName:'',
    email:'',
    password:''
  }

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService,
              private modalsService:ModalsService){
    super();
    this.signedUpUsers=JSON.parse(localStorage.getItem('Signed up users')!) || [];
  }

  openLogInModal(){
    this.modalsService.openLogInModal();
  }

  signUp(){

    if(this.signUpForm.invalid){
      this.signUpForm.markAllAsTouched();
      this.canClose=false;
      return
    }

    this.canClose=true;

    this.usuari={
      firstName:this.signUpForm.controls['firstName'].value,
      lastName:this.signUpForm.controls['lastName'].value,
      email:this.signUpForm.controls['email'].value,
      password:this.signUpForm.controls['password'].value
    }

    this.signedUpUsers.push({...this.usuari});

    localStorage.setItem('Signed up users', JSON.stringify(this.signedUpUsers));

    this.authService.auth_open=true;
    
    this.router.navigate(['./starships']);

    this.signUpForm.reset();
   }

  validField(inputField:string){
    return this.signUpForm.controls[inputField].errors && this.signUpForm.controls[inputField].touched;
  }
  
}

