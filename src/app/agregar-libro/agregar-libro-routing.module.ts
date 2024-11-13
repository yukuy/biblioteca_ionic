import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarLibroPage } from './agregar-libro.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarLibroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarLibroPageRoutingModule {}
