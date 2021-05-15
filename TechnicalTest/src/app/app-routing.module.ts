import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PremiumComponent } from './features/premium/premium.component';

const routes: Routes = [
  {
    path: 'calculatePremium',
    component: PremiumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
