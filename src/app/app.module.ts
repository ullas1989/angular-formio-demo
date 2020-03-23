import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormioModule } from 'angular-formio';
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
    FormioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
