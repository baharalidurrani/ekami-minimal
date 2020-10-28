import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceComponent } from './device/device.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { FloorComponent } from './floor/floor.component';
import { ModulesComponent } from './modules/modules.component';
import { Nested1Component } from './nested1/nested1.component';
import { OrganizationComponent } from './organization/organization.component';
import { SiteComponent } from './site/site.component';
import { ZoneComponent } from './zone/zone.component';

const routes: Routes = [
  {
    path: 'exp',
    component: ExplorerComponent,
  },
  {
    path: 'org/:id',
    component: OrganizationComponent,
  },
  {
    path: 'site/:id',
    component: SiteComponent,
  },
  {
    path: 'floor/:id',
    component: FloorComponent,
  },
  {
    path: 'zone/:id',
    component: ZoneComponent,
  },
  {
    path: 'device/:mac',
    component: DeviceComponent,
  },
  {
    path: 'mod',
    component: ModulesComponent,
    // children: [
    //   {
    //     path: 'n1',
    //     component: Nested1Component,
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
