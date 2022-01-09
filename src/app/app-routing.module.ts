import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
const routes: Routes = [
  {path: 'game', component:GameComponent},
  {path:'', component:HomeComponent},
  {path:'play', component:PlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
