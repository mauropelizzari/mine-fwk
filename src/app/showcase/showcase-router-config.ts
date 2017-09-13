import { RouterModule, Routes } from '@angular/router';
import { ButtonPageComponent } from './button-page/button-page.component';
import { ToastPageComponent } from './toast-page/toast-page.component';
import { FieldPageComponent } from './field-page/field-page.component';
import { DialogPageComponent } from './dialog-page/dialog-page.component';

export const showcaseRoutes: Routes = [
  { path: 'button-page', component: ButtonPageComponent },
  { path: 'toast-page', component: ToastPageComponent },
  { path: 'field-page', component: FieldPageComponent },
  { path: 'dialog-page', component: DialogPageComponent }
];
