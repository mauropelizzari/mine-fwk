import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase.component';
import { MnFwkModule } from '../mn-fwk/mn-fwk.module';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ButtonPageComponent } from './button-page/button-page.component';
import { ToastPageComponent } from './toast-page/toast-page.component';
import { FieldPageComponent } from './field-page/field-page.component';
import { RouterModule, Routes } from '@angular/router';
import { showcaseRoutes } from "./showcase-router-config";
import { DialogPageComponent } from './dialog-page/dialog-page.component';


@NgModule({
  imports: [
    CommonModule,
    MnFwkModule,
    FormsModule,
    RouterModule.forRoot(
      showcaseRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )

  ],
  exports: [ShowcaseComponent,ButtonPageComponent, ToastPageComponent, FieldPageComponent,DialogPageComponent],
  declarations: [ShowcaseComponent,ButtonPageComponent, ToastPageComponent, FieldPageComponent, DialogPageComponent]
})
export class ShowcaseModule { }
