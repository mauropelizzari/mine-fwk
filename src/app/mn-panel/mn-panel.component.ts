import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'mn-panel',
  templateUrl: './mn-panel.component.html',
  styleUrls: ['./mn-panel.component.css']
})
export class MnPanelComponent implements OnInit {

  @Input("id")
  id:string ="";

  @Input("title")
  title:string ="Titolo";

  @Input("icon")
  icon:string ="build";

  constructor() { }

  showTitleBar() : boolean {
    return
  }

  ngOnInit() {
  }

}
