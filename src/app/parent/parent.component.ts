import { Component, OnInit, DoCheck } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit, DoCheck {
  myArr: any = ["Tarun Chander Bhatt", "Urmila Bhatt"];
  constructor() {
    console.log("Parent Constructor");
  }

  addValue() {
    this.myArr.push("Parikshit Bhatt");
  }
  ngOnInit() {
    console.log("parent component: ngOnInit");
  }
  ngDoCheck() {
    console.log("parent component  : ngDoCheck ");
  }
}
