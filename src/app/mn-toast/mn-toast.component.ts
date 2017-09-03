import { Component, OnInit, Input } from '@angular/core';
import { Mn } from '../mn-fwk/mn.service';

@Component({
  selector: 'mn-toast',
  template: ''
})
export class MnToastComponent implements OnInit {

  @Input() message  = '';

  timeout:any = 0;

  constructor() {

  }

  ngOnInit() {

  }

  static show(message) {
    let toast = new MnToastComponent();
    toast.message = message;
    toast.render();
  }

  render() {
    this.createToast();
  }

  private createToast() {

    let toastmsg = Mn.createCmp({
      type: "div",
      attributes: {
        class : "mdl-snackbar__text"
      },
      content: [this.message]
    });

    let toastObj = document.body.querySelector('.mdl-snackbar');
    if (toastObj) {
      toastObj.parentNode.removeChild(toastObj);
    }

    toastObj = Mn.createCmp({
        type: "div",
        attributes: {
          'class':"mdl-snackbar show"
        },
        children : [toastmsg],
        events: {
          'name'      : 'mouseover',
          'function'  : function() {
              if (this.timeout)
                clearTimeout(this.timeout);
          }
        }
    });

    document.body.appendChild(toastObj);

    this.timeout = setTimeout(() => {
      toastObj.classList.remove("show");
      toastObj.classList.add("hide");
    },5000);

  }

}
