import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RingsPageComponent } from './pages/rings-page/rings-page.component';
import { RingDetailComponent } from './pages/ring-detail/ring-detail.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      { path: '', component: RingsPageComponent},
      { path: 'ring-detail/:id', component: RingDetailComponent},
      { path: '**', redirectTo: ''}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RingsRoutingModule { }
