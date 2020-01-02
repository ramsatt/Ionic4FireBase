import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewNotePage } from './view-note.page';

const routes: Routes = [
  {
    path: '',
    component: ViewNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewNotePageRoutingModule {}
