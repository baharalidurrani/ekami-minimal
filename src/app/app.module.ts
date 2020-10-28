import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulesComponent } from './modules/modules.component';
import { SiteComponent } from './site/site.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { OrganizationComponent } from './organization/organization.component';
import { FloorComponent } from './floor/floor.component';
import { ZoneComponent } from './zone/zone.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { DeviceComponent } from './device/device.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UnregisteredComponent } from './unregistered/unregistered.component';
import { AvailableComponent } from './available/available.component';

@NgModule({
  declarations: [
    AppComponent,
    ModulesComponent,
    SiteComponent,
    OrganizationComponent,
    FloorComponent,
    ZoneComponent,
    ExplorerComponent,
    DeviceComponent,
    UnregisteredComponent,
    AvailableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
