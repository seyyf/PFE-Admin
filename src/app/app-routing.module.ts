import { NewproductComponent } from './newproduct/newproduct.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ModifComponent } from './modif/modif.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'', component: DashboardComponent },
  { path:'modif', component: ModifComponent },
  { path:'annonce', component: AnnonceComponent },
  { path:'newproduct', component: NewproductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
