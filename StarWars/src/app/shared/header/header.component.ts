
import { Component } from '@angular/core';
import { ModalsService } from 'src/app/usuaris/services/modals.service';
import { AuthToStarshipsService } from '../services/auth-to-starships.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  constructor(private modalsService:ModalsService,
              private authToStarshipsService:AuthToStarshipsService) { }

  openSignUpModal(){
    this.modalsService.openSignUpModal();
  }

  openLogInModal(){
    this.modalsService.openLogInModal();
  }
  
  goToStarships(){
    this.authToStarshipsService.goToStarships();
  }

  closeModal(){
    this.modalsService.closeModal();
  }

}
