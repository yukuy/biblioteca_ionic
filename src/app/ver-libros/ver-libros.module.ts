import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerLibrosPageRoutingModule } from './ver-libros-routing.module';

import { VerLibrosPage } from './ver-libros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerLibrosPageRoutingModule
  ],
  declarations: [VerLibrosPage]
})
export class VerLibrosPageModule {}
