import { SearchStarshipsResponse, Starship } from './../interfaces/starship';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  private api='https://swapi.dev/api'

  public starships:Starship[]=[];

  constructor(private http:HttpClient) { }

  getStarships(page:number=1){
    const path=`${this.api}/starships`;

    const params=new HttpParams()
        .set('page', page);

    this.http.get<SearchStarshipsResponse>(path,{params})
    .subscribe((resp)=>{
      this.starships=resp.results;
    })

  }

  getSingleStarship(id:number){
    this.http.get<SearchStarshipsResponse>(`${this.api}/starships/${id}`)
  }
}
