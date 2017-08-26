/*****************************************
/* MnTextFieldComponent
/*
/* manca validazione, pattern, messaggi su hover
/* gestione dei tipi
/* - es calendar, number
******************************************/
import {Component,Input, Output,ViewChild, ElementRef,
        EventEmitter,ViewEncapsulation, OnChanges, DoCheck, forwardRef} from '@angular/core';

import { FormsModule,
         NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';

const noop = (_?: any) => {};

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR : any = {
     provide: NG_VALUE_ACCESSOR,
     useExisting: forwardRef(() => MnTextFieldComponent),
     multi: true
 };

@Component({
  selector: 'mn-textfield',
  templateUrl: './mn-text-field.component.html',
  styleUrls: ['./mn-text-field.component.css'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class MnTextFieldComponent implements ControlValueAccessor {

  @ViewChild('container') private _divcontainer: ElementRef;

  @ViewChild('field') private _field: ElementRef;

  private _value: any = "";

  private onChangeCallback: (_: any) => void = noop;

  private onTouchedCallback: () => void = noop;

  @Input("label") public label:string;

  @Input() set value(v: any) {
      this._value =  v;
      this.onChangeCallback(this.value);
      this.onTouchedCallback();
  }
  get value(): any { return this._value; };

  @Input("id") public id:string;

  @Input("readonly") public readonly:boolean = false;

  @Input("hidden") public hidden:boolean = false;

  @Input("required") public required:boolean = false;

  @Input("maxlength") public maxlength:number;

  constructor() { }

  private focus() : void {
    this.classContainer().add('is-focused');
  }

  private blur() : void {
    this.checkDirty();
  }

  private checkValidity() {
    if (!this.field().checkValidity()) {
      this.classContainer().add('is-invalid');
    } else {
      this.classContainer().remove('is-invalid');
    }
  }

  public container() : any {
    return this._divcontainer.nativeElement;
  }

  private classContainer() {
    return this.container().classList;
  }

  public field() : any {
    return this._field.nativeElement;
  }

  public writeValue(value: any): void {
      this._value = value;
      this.field().value = value;
      this.checkDirty();
  }

  public registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  public checkDirty() {
    if (this.field().value) {
      this.classContainer().add('is-dirty'); //fill the field
      this.classContainer().add('is-focused');
    } else {
      this.classContainer().remove('is-dirty');
      this.classContainer().remove('is-focused');
    }
    this.checkValidity();
  }

}
