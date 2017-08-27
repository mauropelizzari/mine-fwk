import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MnMasterPageModule } from '../mn-master-page/mn-master-page.module';
import { MnToastModule } from '../mn-toast/mn-toast.module';
import { MnButtonModule } from '../mn-button/mn-button.module';
import { MnTextFieldModule } from '../mn-text-field/mn-text-field.module';
import { MnComboModule } from '../mn-combo/mn-combo.module';
import { MnDialogModule } from '../mn-dialog/mn-dialog.module';
import { MnPopupModule } from '../mn-popup/mn-popup.module';
import { MnPanelModule } from '../mn-panel/mn-panel.module';
import { Mn } from './mn.service';

import { MnDataSource } from './mn-ds.service';
import { MnRemoteDataSource } from './mn-remoteds.service';
import { MnLocalDataSource } from './mn-localds.service';
import { HttpModule }    from '@angular/http';
import { MnDynamicContainerComponent } from './mn-dyn-container.component';

@NgModule({
  imports: [
    CommonModule,
    MnToastModule,
    MnButtonModule,
    MnTextFieldModule,
    MnComboModule,
    HttpModule,
    MnDialogModule,
    MnPopupModule,
    MnPanelModule
  ],
  providers: [Mn],
  exports: [CommonModule,MnMasterPageModule,MnToastModule,MnButtonModule,MnPanelModule,
            MnTextFieldModule,MnComboModule,MnDialogModule,MnPopupModule,MnDynamicContainerComponent],
  declarations: [MnDynamicContainerComponent]
})
export class MnFwkModule { }
