import { Component, OnInit,ViewContainerRef,ViewChild,Input,ComponentRef } from '@angular/core';

@Component({
  selector: 'mn-popup',
  templateUrl: './mn-popup.component.html',
  styleUrls: ['./mn-popup.component.css']
})
export class MnPopupComponent implements OnInit {

  @Input("id")
  id : string = "";

  @Input("hidden")
  hidden : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  public hide() :any {
    this.hidden = true;
  }

  public show() :any {
    this.hidden = false;
  }

  public setUpCmpRef(cmpRef:ComponentRef<MnPopupComponent>) : void {
    cmpRef.instance.hidden = false;
  }

}
