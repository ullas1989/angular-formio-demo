import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormioModule } from 'angular-formio';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BuilderComponent } from './builder/builder/builder.component';
import { RenderComponent } from './renderer/render/render.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    RenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
