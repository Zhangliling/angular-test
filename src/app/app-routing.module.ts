import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CaComponent} from './caculator/ca.component';
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

const routes: Routes = [
  {path: 'ca' , component: CaComponent, data: { title: '你好'}},
  {path: '' , redirectTo: 'ca', pathMatch: 'full'},
  {path: '**', component: HeroDetailComponent }
];
@NgModule({
  exports:
  [RouterModule],
  imports:
  [RouterModule.forRoot(routes, { enableTracing: true})],
})
export class AppRoutingModule {}

