import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExplorerComponent } from './explorer/explorer.component';
import { ModulesComponent } from './modules/modules.component';

const routes: Routes = [
  {
    path: 'exp',
    component: ExplorerComponent,
  },
  {
    path: 'mod',
    component: ModulesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
