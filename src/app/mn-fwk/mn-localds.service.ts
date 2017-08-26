import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { MnDataSource } from './mn-ds.service';

export class MnLocalDataSource implements MnDataSource {

  constructor() { }

  private data : any;

  public setData(data:any) : void {
    this.data = data;
  }

  public getData() : Promise<any> {

    return new Promise((resolve, reject) => {
      try {
        resolve(this.data);
      } catch(e) {
        reject(e);
      }
    });

  }

}
