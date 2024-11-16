import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerLibrosPage } from './ver-libros.page';

const routes: Routes = [
  {
    path: '',
    component: VerLibrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerLibrosPageRoutingModule {}
