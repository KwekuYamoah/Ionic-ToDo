import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditToDoPageRoutingModule } from './edit-to-do-routing.module';

import { EditToDoPage } from './edit-to-do.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditToDoPageRoutingModule
  ],
  declarations: [EditToDoPage]
})
export class EditToDoPageModule {}
