import { Component, OnChanges, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
  // inputs: ["dataParent"]
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() dataParent: string;
  constructor() {
    console.log("This is Constructor");
  }
  ngOnChanges(par: any) {
    console.log(this.dataParent);
  }
  ngOnInit() {}
}
