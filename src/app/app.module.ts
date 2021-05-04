import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PadreComponent } from './padre/padre.component';
import { Child1Component } from './child1/child1.component';
import { BarranavComponent } from './barranav/barranav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { AcercaComponent } from './acerca/acerca.component';
import { AngularmaterialComponent } from './angularmaterial/angularmaterial.component';
import { MatButtonModule } from '@angular/material/button';
import { EscribeComponent } from './input/escribe/escribe.component';
import { MuestraComponent } from './input/muestra/muestra.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    Child1Component,
    BarranavComponent,
    AcercaComponent,
    AngularmaterialComponent,
    EscribeComponent,
    MuestraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatInputModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
