import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './modules/car/car-list/car-list.component';
import { CarDetailComponent } from './modules/car/car-detail/car-detail.component';

const routes: Routes = [
  { path: '', component: CarListComponent },
  { path: 'car/:id', component: CarDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
