import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceComponent } from './device/device.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { FloorComponent } from './floor/floor.component';
import { ModulesComponent } from './modules/modules.component';
import { UnregisteredComponent } from './unregistered/unregistered.component';
import { OrganizationComponent } from './organization/organization.component';
import { SiteComponent } from './site/site.component';
import { ZoneComponent } from './zone/zone.component';
import { AvailableComponent } from './available/available.component';
import { ConfiguredComponent } from './configured/configured.component';

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
    children: [
      {
        path: 'unregistered',
        component: UnregisteredComponent,
      },
      {
        path: 'available',
        component: AvailableComponent,
      },
      {
        path: 'configured',
        component: ConfiguredComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
