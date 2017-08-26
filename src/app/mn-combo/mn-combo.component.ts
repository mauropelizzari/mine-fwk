import {Component,Input, Output,ViewChild, ElementRef,OnInit,
        EventEmitter,ViewEncapsulation, OnChanges, DoCheck, forwardRef} from '@angular/core';

import { FormsModule,
         NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

import { MnTextFieldComponent } from '../mn-text-field/mn-text-field.component';
import { MnDataSource } from '../mn-fwk/mn-ds.service';

import { MnToastComponent,MESSAGE_TYPE } from '../mn-toast/mn-toast.component';


@Component({
  selector: 'mn-combo',
  templateUrl: './mn-combo.component.html',
  styleUrls: ['./mn-combo.component.css'],
  providers: [{
       provide: NG_VALUE_ACCESSOR,
       useExisting: forwardRef(() => MnComboComponent),
       multi: true
   }]
})
export class MnComboComponent extends MnTextFieldComponent implements OnInit {

  @Input("datasource")
  datasource:any;

  @Input("valueName")
  valueName:string = "value";

  @Input("descriptionName")
  descriptionName:string = "description";

  items:any = [];

  constructor() {
    super();

  }

  private isEmpty() {
    return this.items.length <= 0;
  }

  ngOnInit() {
    if (this.datasource) {
      this.datasource.getData().then(data => {
        this.items = data.results;
      }).catch(error => {
        MnToastComponent.show(error,MESSAGE_TYPE.ERROR,true);
      });
    }
    this.checkDirty();
  }







}
