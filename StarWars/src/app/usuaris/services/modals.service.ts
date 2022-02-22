import { Injectable } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  constructor(private simpleModalService: SimpleModalService) { }

  openSignUpModal(): void {
    this.simpleModalService.addModal(SignupComponent)
    .subscribe((isConfirmed) => {
      //We get modal result
      if (isConfirmed) {
        console.log('accepted');
      }
      else {
        console.log('declined');
      }
    });
  }

  openLogInModal(): void {
    this.simpleModalService.addModal(LoginComponent)
    .subscribe((isConfirmed) => {
      //We get modal result
      if (isConfirmed) {
        console.log('accepted');
      }
      else {
        console.log('declined');
      }
    });
  }

  closeModal():void{
    this.simpleModalService.removeAll()
  }
}
