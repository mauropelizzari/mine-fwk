import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnTextFieldComponent } from './mn-text-field.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [MnTextFieldComponent],
  declarations: [MnTextFieldComponent]
})
export class MnTextFieldModule { }
