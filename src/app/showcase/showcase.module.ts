import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase.component';
import { MnFwkModule } from '../mn-fwk/mn-fwk.module';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    MnFwkModule,
    FormsModule
  ],
  exports: [ShowcaseComponent],
  declarations: [ShowcaseComponent]
})
export class ShowcaseModule { }
