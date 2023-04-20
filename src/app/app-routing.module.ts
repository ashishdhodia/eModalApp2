import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResponsiveAppComponent } from './responsive-app/responsive-app.component'
import { WoResponsiveAppComponent } from './wo-responsive-app/wo-responsive-app.component'

const routes: Routes = [
  { path: 'responsive', component: ResponsiveAppComponent },
  { path: 'woresponsive', component: WoResponsiveAppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
