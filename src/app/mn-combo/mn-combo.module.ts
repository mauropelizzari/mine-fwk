import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnComboComponent } from './mn-combo.component';
import { MnTextFieldModule } from '../mn-text-field/mn-text-field.module';
import { FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MnTextFieldModule,
    FormsModule
  ],
  exports: [MnComboComponent],
  declarations: [MnComboComponent]
})
export class MnComboModule { }
