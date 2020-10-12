import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { ModulesComponent } from './modules/modules.component';
import { SiteComponent } from './site/site.component';
import { Nested1Component } from './nested1/nested1.component';

@NgModule({
  declarations: [
    AppComponent,
    ExplorerComponent,
    ModulesComponent,
    SiteComponent,
    Nested1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
