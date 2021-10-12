import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  @Input("name") personName: string = "NA";
  @Output() childButtonClick = new EventEmitter();
  newPersonName: string = "Ankur";
  constructor() {}

  ngOnInit() {}

  onButtonClick() {
    this.childButtonClick.emit(this.newPersonName);
  }
}
