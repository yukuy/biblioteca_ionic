import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarLibroPageRoutingModule } from './agregar-libro-routing.module';

import { AgregarLibroPage } from './agregar-libro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarLibroPageRoutingModule
  ],
  declarations: [AgregarLibroPage]
})
export class AgregarLibroPageModule {}
