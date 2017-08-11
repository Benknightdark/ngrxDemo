import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClickComponent } from './click/click.component';

const routes: Routes = [
  {
    path: 'click',
    component: ClickComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
