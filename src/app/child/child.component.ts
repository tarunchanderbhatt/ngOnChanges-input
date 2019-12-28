import { Component, OnChanges, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
  // inputs: ["dataParent"]
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() dataParent: string;
  @Input() arrList: any;
  constructor() {
    console.log(" Child :  Constructor ");
  }
  ngOnChanges(par: any) {
    // console.log(this.dataParent);
    // console.log(par);
    console.log(" Child : ngOnChange ");
  }
  ngOnInit() {
    console.log(" Child : ngOnInit ");
  }

  ngDoCheck() {
    console.log(" Child : ngDoCheck ");
  }
}
