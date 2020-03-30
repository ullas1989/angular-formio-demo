import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuilderComponent } from './builder/builder/builder.component';
import { RenderComponent } from './renderer/render/render.component';

const routes = [
  { path: '', redirectTo: 'render', pathMatch: 'full' },
  {
    path: 'builder',
    component: BuilderComponent
  },
  {
    path: 'render',
    component: RenderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
