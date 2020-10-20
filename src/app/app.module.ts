import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulesComponent } from './modules/modules.component';
import { SiteComponent } from './site/site.component';
import { Nested1Component } from './nested1/nested1.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { OrganizationComponent } from './organization/organization.component';
import { FloorComponent } from './floor/floor.component';
import { ZoneComponent } from './zone/zone.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { DeviceComponent } from './device/device.component';

@NgModule({
  declarations: [
    AppComponent,
    ModulesComponent,
    SiteComponent,
    Nested1Component,
    OrganizationComponent,
    FloorComponent,
    ZoneComponent,
    ExplorerComponent,
    DeviceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, GraphQLModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
