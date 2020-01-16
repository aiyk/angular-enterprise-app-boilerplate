import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { CardComponent } from './card/card.component';
import { CardDetailItemComponent } from './card/card-detail-item/card-detail-item.component';

@NgModule({
  declarations: [
    AlertComponent,
    CardComponent,
    CardDetailItemComponent
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
