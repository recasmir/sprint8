import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { ShipsComponent } from './ships/ships.component';
import { StarshipsComponent } from './starships/starships.component';
import { AuthGuard } from './usuaris/auth.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {
    path:'starships', 
    component: StarshipsComponent,
    canActivate: [AuthGuard]
  },
  {path:'singleship', component:ShipsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
