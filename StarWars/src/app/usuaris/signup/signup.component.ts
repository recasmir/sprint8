
import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Usuari } from './../../interfaces/usuari';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  signUpForm:FormGroup = this.fb.group({
    firstName:['', Validators.required],
    lastName:['', Validators.required],
    email:['', Validators.required],
    password:['', Validators.required],
  })

  signedUpUsers:Usuari[]=[];
  result:boolean=true;

  constructor(private modalService: NgbModal,
              private fb: FormBuilder,
              private router: Router,
              private authService: AuthService){

    this.signedUpUsers=JSON.parse(localStorage.getItem('Signed up users')!) || [];
  }

  // closeResult: string='';

  usuari:Usuari={
    firstName:'',
    lastName:'',
    email:'',
    password:''
  }

  openSignup(content:any) {
    this.modalService.open(content, { centered: true });
  }

  signUp(){

    if(this.signUpForm.invalid){
      this.signUpForm.markAllAsTouched();
      this.result=false;
      return
    }

    this.result=true;

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

