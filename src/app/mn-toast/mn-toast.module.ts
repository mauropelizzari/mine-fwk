import { NgModule }                   from '@angular/core';
import { CommonModule }               from '@angular/common';
import { MnToastComponent }           from './mn-toast.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [MnToastComponent],
  declarations: [MnToastComponent]
})
export class MnToastModule { }
