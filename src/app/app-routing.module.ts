import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadreComponent } from './padre/padre.component';
import { Child1Component } from './child1/child1.component';
import { AcercaComponent } from './acerca/acerca.component';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component';
import { EscribeComponent } from './input/escribe/escribe.component';

const routes: Routes = [
  {
    path: 'padre',
    component: PadreComponent
  },
  {
    path: 'child1',
    component: Child1Component
  },
  {
    path: 'mostrar',
    component: EscribeComponent
  },
  {
    path: 'acerca',
    component: AcercaComponent
  },
  {
    path: 'angmat',
    component: AngularmaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
