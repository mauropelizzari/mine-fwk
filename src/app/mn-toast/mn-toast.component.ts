import { Component, OnInit, Input } from '@angular/core';
import { Mn } from '../mn-fwk/mn.service';

export var MESSAGE_TYPE:any = {
  ERROR : 'danger',
  INFO : 'info',
  SUCCESS : 'success',
  WARN : 'warning'
}

@Component({
  selector: 'mn-toast',
  template: ''
})
export class MnToastComponent implements OnInit {

  @Input() type     = 'danger';
  @Input() message  = '';
  @Input() autohide = false;

  constructor() {
    this.createContainer();
  }

  ngOnInit() {

  }

  static show(message,type,autohide) {
    let toast = new MnToastComponent();
    toast.message = message;
    toast.type = type;
    toast.autohide = autohide;
    toast.render();
  }

  render() {
    this.createToast();
  }

  private createContainer() {

    if (!document.body.querySelector('.toast-container')) {
      let container = Mn.createCmp({
        type: "div",
        attributes: {
          'class':'toast-container',
        }
      });
      document.body.appendChild(container);
    }
  }

  private createToast() {

    let closeAncor = Mn.createCmp({
      type: "a",
      attributes: {
        'class':'alert-link',
        'href':'#'
      },
      content: "&times;"
    });

    let span = Mn.createCmp({
      type: "span",
      attributes: {
        'class':'close'
      },
      children : [closeAncor]
    });

    let toastmsg = Mn.createCmp({
      type: "div",
      content: [this.message]
    });

    let toast = Mn.createCmp({
      type: "div",
      attributes: {
    //    'class':"alert alert-" + this.type + " fade show",
    'class':"mdl-snackbar",
      },
    //  children : [span,toastmsg]
      children : [toastmsg]
    });

    //let container = document.querySelector(".toast-container");
    //container.appendChild(toast);
    document.body.appendChild(toast);


    closeAncor.addEventListener("click",() => {
      toast.classList.remove("show");
      setTimeout(() => {
        toast.parentNode.removeChild(toast);
      },500)
    });

    this.doAutoHide(closeAncor);

  }

  private doAutoHide(closeAncor:any) : void {
    if (this.autohide) {
      setTimeout(() => {
        closeAncor.click();
      },3000);
    }
  }

}
