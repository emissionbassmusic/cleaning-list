import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrganizationComponent } from './organization/organization.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'organization/:id',
    component: OrganizationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
