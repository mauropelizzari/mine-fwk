import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'mn-master-page',
  templateUrl: './mn-master-page.component.html',
  styleUrls: ['./mn-master-page.component.css']
})
export class MnMasterPageComponent implements OnInit {

  @Input("titleApp")
  titleApp:string="master";

  @Input("username")
  username:string="jon";

  @Input("logo")
  logo:string="";

  constructor() {

  }

  showMenu() {
    setTimeout(()=>{document.getElementById("mnBtn").style.left = "250px";},500);
  }

  hideMenu() {
    setTimeout(()=>{document.getElementById("mnBtn").style.left = "0px";},500);
  }

  ngOnInit() {
  }

}
