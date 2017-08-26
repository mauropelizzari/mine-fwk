import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnPopupComponent } from './mn-popup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MnPopupComponent],
  exports: [MnPopupComponent],
  entryComponents: [MnPopupComponent]
})
export class MnPopupModule { }
