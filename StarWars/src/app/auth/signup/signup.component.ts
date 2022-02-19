
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

import { Usuari } from './../../interfaces/usuari';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  closeResult: string='';

  @ViewChild('signUpForm') signUpForm!: NgForm;

  usuari:Usuari={
    firstName:'',
    lastName:'',
    email:'',
    displayName:'',
    password:''
  }

  signedUpUsers:Usuari[]=[];

  constructor(private modalService: NgbModal) { 

    this.signedUpUsers=JSON.parse(localStorage.getItem('Signed up users')!) || [];

  }

  ngOnInit(): void {
  }

  openSignup(content:any) {
    this.modalService.open(content, { centered: true });
  }

  signUp(){

    const nouUsuari:Usuari={
      firstName:this.usuari.firstName,
      lastName:this.usuari.lastName,
      email:this.usuari.email,
      displayName:this.usuari.displayName,
      password:this.usuari.password
    }

    this.signedUpUsers.push({...nouUsuari});

    localStorage.setItem('Signed up users', JSON.stringify(this.signedUpUsers));

    console.log(this.signedUpUsers);

    this.usuari = {
      firstName:'',
      lastName:'',
      email:'',
      displayName:'',
      password:''
    };
    
  }


}