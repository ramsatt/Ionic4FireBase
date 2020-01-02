import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewNotePageRoutingModule } from './view-note-routing.module';

import { ViewNotePage } from './view-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewNotePageRoutingModule
  ],
  declarations: [ViewNotePage]
})
export class ViewNotePageModule {}
