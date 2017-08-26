import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnButtonComponent } from './mn-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MnButtonComponent],
  declarations: [MnButtonComponent]
})
export class MnButtonModule { }
