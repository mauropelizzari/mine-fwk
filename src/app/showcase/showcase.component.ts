import { Component, OnInit, ViewChild,EventEmitter} from '@angular/core';
import { MnMasterPageComponent} from '../mn-master-page/mn-master-page.component'
import { MnToastComponent,MESSAGE_TYPE } from '../mn-toast/mn-toast.component';
import { MnTextFieldComponent} from '../mn-text-field/mn-text-field.component'
import { MnComboComponent} from '../mn-combo/mn-combo.component'
import { MnDataSource } from '../mn-fwk/mn-ds.service';
import { MnLocalDataSource } from '../mn-fwk/mn-localds.service';
import { MnRemoteDataSource } from '../mn-fwk/mn-remoteds.service';
import { MnDynamicContainerComponent } from '../mn-fwk/mn-dyn-container.component';
import { MnPopupComponent} from '../mn-popup/mn-popup.component'
import { MnDialogComponent} from '../mn-dialog/mn-dialog.component'
import { MnPanelComponent} from '../mn-panel/mn-panel.component'
import { Http } from '@angular/http';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  valore:string = "ciao";
  valore2:string = "prova";

  @ViewChild(MnDynamicContainerComponent)
  private dynContainer: MnDynamicContainerComponent

  @ViewChild(MnPopupComponent)
  private pp: MnPopupComponent


  numbers:any = {results : [
    {value:"1", description:"1 - UNO"},
    {value:"2", description:"2 - DUE"},
    {value:"3", description:"3 - TRE"},
    {value:"4", description:"4 - QUATTRO"}
  ]};

  nmDs:MnDataSource;

  constructor(public http: Http) {

  }

  public showDialog(title?:string,message?:string): void {
    let popup = new MnDialogComponent();
    popup.title = title;
    popup.message = message;
    popup.resolveAction = () => {
      alert("Operazione eseguita");
    }
    this.dynContainer.append(popup);
  }

  public showGenericComponent() {
    let popup = new MnPopupComponent();
    this.dynContainer.append(popup);
  }

  public showPopup() {
    this.pp.show();
  }

  showToast(message,type,autohide) {
    MnToastComponent.show(message,type,autohide);
  }

  get MESSAGE_TYPE() { return MESSAGE_TYPE; }

  ngOnInit() {
      let cfg = {
        url : 'https://mzte64irzi.execute-api.eu-west-1.amazonaws.com/numbers'
      }
    //  this.nmDs = new MnLocalDataSource();
    //  this.nmDs.setData(this.numbers);
    this.nmDs = new MnRemoteDataSource(cfg);

  }

}
