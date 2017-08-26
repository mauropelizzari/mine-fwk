import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

export interface MnDataSource {

  getData(): Promise<any>;

  setData(data:any) : void;

}
