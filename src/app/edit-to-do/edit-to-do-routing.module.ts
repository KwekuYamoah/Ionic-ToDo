import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditToDoPage } from './edit-to-do.page';

const routes: Routes = [
  {
    path: '',
    component: EditToDoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditToDoPageRoutingModule {}
