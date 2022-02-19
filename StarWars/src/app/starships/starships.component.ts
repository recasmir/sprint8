import { ApiCallsService } from './../services/api-calls.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Starship } from '../interfaces/starship';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  nau:Starship = {
    name:                   '',
    model:                  '',
    manufacturer:           '',
    cost_in_credits:        '',
    length:                 '',
    max_atmosphering_speed: '',
    crew:                   '',
    passengers:             '',
    cargo_capacity:         '',
    consumables:            '',
    hyperdrive_rating:      '',
    MGLT:                   '',
    starship_class:         '',
    pilots:                 [],
    films:                  [],
    created:                new Date,
    edited:                 new Date,
    url:                    ''
}

  constructor(private shipService:ApiCallsService, 
              private router: Router) { }

  page:number=1;

  ngOnInit(): void {
    
    this.shipService.getStarships(this.page);
  }

  get starships(){
    return this.shipService.starships;
  }

  mostrarNau(id:number){
    this.router.navigate(["/singleship"], {state: {data: id}});
  }

  nextPage(){
    this.page ++;
    this.shipService.getStarships(this.page);
  }

  prevPage(){
    if(this.page > 0){
      this.page --;
      this.shipService.getStarships(this.page);
    }
  }

}
