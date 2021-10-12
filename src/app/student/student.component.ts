import { Component } from "@angular/core";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.css"]
})
export class StudentComponent {
  name: string;
  name1: string;

  constructor() {
    this.name = "Shree Ganeshji";
    this.name1 = "Ankur";
  }

  onClick(event) {
    alert("Clicked");
    alert(this.name1);
    console.log(event);
  }
}
