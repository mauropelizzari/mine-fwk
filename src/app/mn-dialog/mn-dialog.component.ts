import { Component, OnInit,ViewContainerRef,ViewChild,Input,ComponentRef } from '@angular/core';
import { MnPopupComponent } from '../mn-popup/mn-popup.component'

@Component({
  selector: 'mn-dialog',
  templateUrl: './mn-dialog.component.html',
  styleUrls: ['../mn-popup/mn-popup.component.css']
})
export class MnDialogComponent extends MnPopupComponent {

  @Input("title")
  title : string = "";

  @Input("message")
  message : string = "";

  constructor() {
    super();
  }



  private reject() : any {
    this.hide();
  }

  private resolve() : any {
    this.hide();
    alert("calling operation");
  }

  private showTitle() : boolean {
    return this.title != '';
  }

  public setUpCmpRef(cmpRef:ComponentRef<MnDialogComponent>) : void {
    cmpRef.instance.title = this.title;
    cmpRef.instance.message = this.message;
  }

}
