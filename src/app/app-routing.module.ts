import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExplorerComponent } from './explorer/explorer.component';
import { ModulesComponent } from './modules/modules.component';
import { Nested1Component } from './nested1/nested1.component';

const routes: Routes = [
  {
    path: 'exp',
    component: ExplorerComponent,
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
