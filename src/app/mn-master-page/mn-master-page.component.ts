import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mn-master-page',
  templateUrl: './mn-master-page.component.html',
  styleUrls: ['./mn-master-page.component.css']
})
export class MnMasterPageComponent implements OnInit {

  @Input("title")
  title:string="master";

  @Input("username")
  username:string="jon";

  @Input("logo")
  logo:string="";

  constructor() {
    
  }

  ngOnInit() {
  }

}
