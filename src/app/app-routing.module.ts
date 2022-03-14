import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {path:"section/:grade",component:SectionComponent},
  {path:"",component:DashboardComponent},
  {path:"dashboard",component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
