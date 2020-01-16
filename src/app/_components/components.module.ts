import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AlertComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
