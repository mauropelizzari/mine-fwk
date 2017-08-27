import { Component, OnInit,ViewContainerRef,ViewChild,
  Input,ComponentRef,ElementRef,Output,EventEmitter } from '@angular/core';
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

  @Output("onResolve")
  onResolve = new EventEmitter();

  @Output("onReject")
  onReject  = new EventEmitter();

  @Input("resolveAction")
  resolveAction:any = () => {};

  @Input("rejectAction")
  rejectAction:any = () => {};

  @ViewChild("container")
  container:MnPopupComponent;

  constructor() {
    super();
  }

  private reject() : any {
    this.container.hide();
    this.onReject.emit( {reject:true});
    this.rejectAction();
  }

  private resolve() : any {
    this.container.hide();
    this.onResolve.emit( {resolve:true});
    this.resolveAction();
  }

  private showTitle() : boolean {
    return this.title != '';
  }

  public setUpCmpRef(cmpRef:ComponentRef<MnDialogComponent>) : void {
    cmpRef.instance.title = this.title;
    cmpRef.instance.message = this.message;
    cmpRef.instance.resolveAction = this.resolveAction;
    cmpRef.instance.rejectAction = this.rejectAction;
  }

}
