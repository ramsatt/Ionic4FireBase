import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateNotePage } from './update-note.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateNotePageRoutingModule {}
