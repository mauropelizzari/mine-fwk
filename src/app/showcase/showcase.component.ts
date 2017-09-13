import { Component, OnInit, ViewChild,EventEmitter} from '@angular/core';
import { MnMasterPageComponent} from '../mn-master-page/mn-master-page.component'
import { MnToastComponent } from '../mn-toast/mn-toast.component';
import { MnDynamicContainerComponent } from '../mn-fwk/mn-dyn-container.component';
import { MnPopupComponent} from '../mn-popup/mn-popup.component'
import { MnDialogComponent} from '../mn-dialog/mn-dialog.component'
import { MnPanelComponent} from '../mn-panel/mn-panel.component'

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {


  @ViewChild(MnDynamicContainerComponent)
  private dynContainer: MnDynamicContainerComponent

  @ViewChild(MnPopupComponent)
  private pp: MnPopupComponent

  constructor() {

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

  showToast(message) {
    MnToastComponent.show(message);
  }

  ngOnInit() {

  }

}
