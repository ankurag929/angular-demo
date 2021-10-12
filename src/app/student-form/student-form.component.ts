import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { StudentService } from "./../student.service";

@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.css"]
})
export class StudentFormComponent implements OnInit {
  @Output() onStudentSubmit = new EventEmitter();
  studentName: string;
  studentRollNo: number;
  studentsList = [];
  editModeIndex = -1;
  constructor(private studentService: StudentService) {
    this.studentService.getList().subscribe(
      (result: any) => {
        console.log(result);
        if (result && result.length) {
          this.studentsList = result;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}

  onSubmit() {
    const data = {
      name: this.studentName,
      rollNo: this.studentRollNo
    };
    //Code to save the data to the db
    //On success
    this.onStudentSubmit.emit(data);
    this.studentName = null;
    this.studentRollNo = null;
  }

  onFormSubmit(myForm: NgForm) {
    console.log(myForm);
    if (myForm.valid) {
      console.log(myForm.value);
      //Code to save the data to the DB
      this.studentService.add(myForm.value).subscribe(result => {
        console.log(result);
        myForm.resetForm();
        this.studentsList.push(result);
        alert("Save Success");
      });
    } else {
      alert("Invalid");
    }
  }

  onDelete(studentId, index) {
    alert(studentId);
    this.studentService.delete(studentId).subscribe(result => {
      console.log("result");
      console.log(index);
      //Code to delete the object from the array
      this.studentsList.splice(index, 1);
      alert("Delete Success");
    });
  }

  onEdit(studentId, i) {
    this.editModeIndex = i;
  }

  onUpdate(studentId, studentName) {
    this.studentService.update(studentId, studentName).subscribe(result => {
      alert("Update Success");
      this.editModeIndex = -1;
    });
  }

  onCancel() {
    this.editModeIndex = -1;
  }
}
