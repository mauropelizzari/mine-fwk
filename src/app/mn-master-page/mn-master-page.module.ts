import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnMasterPageComponent } from './mn-master-page.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [MnMasterPageComponent],
  declarations: [MnMasterPageComponent]
})
export class MnMasterPageModule { }
