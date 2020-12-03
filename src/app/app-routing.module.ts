import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from '../app/cars/cars.component';
import { AddCarsComponent } from './add-cars/add-cars.component';

  const routes: Routes = [ { path: 'cars', component: CarsComponent },{path: 'addcars', component: AddCarsComponent } ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
