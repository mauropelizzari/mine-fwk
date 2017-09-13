import { Component, OnInit } from '@angular/core';
import { MnTextFieldComponent} from '../../mn-text-field/mn-text-field.component'
import { MnComboComponent} from '../../mn-combo/mn-combo.component'
import { MnDataSource } from '../../mn-fwk/mn-ds.service';
import { MnLocalDataSource } from '../../mn-fwk/mn-localds.service';
import { MnRemoteDataSource } from '../../mn-fwk/mn-remoteds.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-field-page',
  templateUrl: './field-page.component.html',
  styleUrls: ['./field-page.component.css']
})
export class FieldPageComponent implements OnInit {

  valore:string = "ciao";
  valore2:string = "prova";


  numbers:any = {results : [
    {value:"1", description:"1 - UNO"},
    {value:"2", description:"2 - DUE"},
    {value:"3", description:"3 - TRE"},
    {value:"4", description:"4 - QUATTRO"}
  ]};


  nmDs:MnDataSource;


  constructor(public http: Http) {

  }

  ngOnInit() {
      let cfg = {
        url : 'https://mzte64irzi.execute-api.eu-west-1.amazonaws.com/numbers'
      }
    //  this.nmDs = new MnLocalDataSource();
    //  this.nmDs.setData(this.numbers);
    this.nmDs = new MnRemoteDataSource(cfg);

  }

}
