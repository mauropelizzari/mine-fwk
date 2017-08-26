import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnButtonModule } from '../mn-button/mn-button.module';
import { MnDialogComponent } from './mn-dialog.component';
import { MnPopupModule } from '../mn-popup/mn-popup.module';

@NgModule({
  imports: [
    CommonModule,MnButtonModule,MnPopupModule
  ],
  exports: [MnDialogComponent],
  declarations: [MnDialogComponent],
  entryComponents: [MnDialogComponent]
})
export class MnDialogModule { }
