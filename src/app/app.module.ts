import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';

import { AppComponent } from './app.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { OrganizationComponent } from './organization/organization.component';
import { SiteComponent } from './site/site.component';
import { FloorComponent } from './floor/floor.component';
import { ZoneComponent } from './zone/zone.component';
import { DeviceComponent } from './device/device.component';
import { ModulesComponent } from './modules/modules.component';
import { UnregisteredComponent } from './unregistered/unregistered.component';
import { AvailableComponent } from './available/available.component';
import { ConfiguredComponent } from './configured/configured.component';
import { ConfigureDeviceComponent } from './configure-device/configure-device.component';
import { AddZoneComponent } from './add-zone/add-zone.component';
import { AddFloorComponent } from './add-floor/add-floor.component';
import { AddSiteComponent } from './add-site/add-site.component';

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
    ConfiguredComponent,
    ConfigureDeviceComponent,
    AddZoneComponent,
    AddFloorComponent,
    AddSiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
