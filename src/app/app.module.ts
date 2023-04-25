import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResponsiveAppComponent } from './responsive-app/responsive-app.component';
import { WoResponsiveAppComponent } from './wo-responsive-app/wo-responsive-app.component';
import { ModaldialogComponent } from './modaldialog/modaldialog.component';
import { ContainerlistComponent } from './containerlist/containerlist.component';
import { ContainerDetailsTopComponent } from './container-details-top/container-details-top.component'

@NgModule({
  declarations: [
    AppComponent,
    ResponsiveAppComponent,
    WoResponsiveAppComponent,
    ModaldialogComponent,
    ContainerlistComponent,
    ContainerDetailsTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
