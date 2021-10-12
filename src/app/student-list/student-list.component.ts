import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-student-list",
  templateUrl: "./student-list.component.html",
  styleUrls: ["./student-list.component.css"]
})
export class StudentListComponent implements OnInit {
  @Input() students = [];
  @Output() onStudentDelete = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onDelete(rollNo) {
    this.onStudentDelete.emit(rollNo);
  }
}
