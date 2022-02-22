import { Component } from '@angular/core';

import { AuthToStarshipsService } from '../services/auth-to-starships.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private authToStarshipsService:AuthToStarshipsService) {}
  
  goToStarships(){
   this.authToStarshipsService.goToStarships();
  }

}
