import { Starship } from './../interfaces/starship';
import { Component, Input, OnInit } from '@angular/core';
import { ApiCallsService } from '../services/api-calls.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  idShip:number=0;
  foto:string='';

  mostrarNau!: Starship;

  constructor(private shipService:ApiCallsService) {}

  ngOnInit(): void {
    
    this.idShip=history.state.data;
    this.shipService.getSingleStarship(this.idShip);
    this.mostrarNau=this.starships[this.idShip];

    const url=this.mostrarNau.url.split('/');
    const urlId=url[5];

    this.foto= `https://starwars-visualguide.com/assets/img/starships/${urlId}.jpg`

  }

  get starships(){
    return this.shipService.starships;
  }

}
