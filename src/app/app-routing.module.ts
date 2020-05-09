import { FadeEffectComponent } from './fade-effect/fade-effect.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'fadeEffect', component : FadeEffectComponent},
  {path: '', redirectTo: 'fadeEffect', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
