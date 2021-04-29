import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { Child1Component } from './child1/child1.component';

const routes: Routes = [
  {
    path: 'padre',
    component: PadreComponent
  },
  {
    path: 'child1',
    component: Child1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
