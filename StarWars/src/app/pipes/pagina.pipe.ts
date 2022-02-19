import { Pipe, PipeTransform } from '@angular/core';
import { Starship } from '../interfaces/starship';

@Pipe({
  name: 'pagina'
})
export class PaginaPipe implements PipeTransform {

  transform(starships:Starship[], page:number = 0): Starship[] {
    return starships.slice(page, page+10);
  }

}
