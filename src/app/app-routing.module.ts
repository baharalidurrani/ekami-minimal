import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
import { Nested1Component } from './nested1/nested1.component';
import { OrganizationComponent } from './organization/organization.component';

const routes: Routes = [
  {
    path: 'org',
    component: OrganizationComponent,
  },
  {
    path: 'mod',
    component: ModulesComponent,
    children: [
      {
        path: 'n1',
        component: Nested1Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
