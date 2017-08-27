import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnPanelComponent } from './mn-panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MnPanelComponent],
  exports: [MnPanelComponent],
  entryComponents: [MnPanelComponent]
})
export class MnPanelModule { }
