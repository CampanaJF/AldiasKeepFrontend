import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RingsPageComponent } from './pages/rings-page/rings-page.component';
import { RingDetailComponent } from './pages/ring-detail/ring-detail.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from '../material/material.module';
import { RingsRoutingModule } from './rings-routing.module';



@NgModule({
  declarations: [
    RingsPageComponent,
    RingDetailComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    RingsRoutingModule,
    MaterialModule
  ]
})
export class RingsModule { }
