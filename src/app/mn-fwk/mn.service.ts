import { Injectable } from '@angular/core';

@Injectable()
export class Mn {

  constructor() { }

  public static createCmp(cfg:any) : any {
    if (!cfg  || !cfg.type) {
      return;
    }

    //create element
    let obj = document.createElement(cfg.type);

    //add attributes
    if (cfg.attributes) {
      for (let attribute in cfg.attributes) {
        let value = cfg.attributes[attribute];
        obj.setAttribute(attribute,value);
      }
    }

    //set content
    if (cfg.content)
      obj.innerHTML=cfg.content;

    //add children
    if (cfg.children) {
      cfg.children.forEach((item) => {
        obj.appendChild(item);
      });
    }

    //add events
    if (cfg.events) {
      for (let event in cfg.events) {
        obj.addEventListener(event["name"],event["function"]);
      }
    }

    return obj;

  }

}
