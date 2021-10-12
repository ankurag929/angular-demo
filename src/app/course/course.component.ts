import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { CourseService } from "../course.service";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"]
})
export class CourseComponent implements OnInit {
  myFormGroup: FormGroup;
  courseList = [];
  constructor(private fb: FormBuilder, private courseService: CourseService) {}

  ngOnInit() {
    // this.myFormGroup = new FormGroup({
    //   name: new FormControl(''),
    //   fees: new FormControl('')
    // })
    this.courseService.getList().subscribe((result: any) => {
      this.courseList = result;
    });
    this.myFormGroup = this.fb.group({
      name: ["", [Validators.required]],
      fees: [""],
      duration: [""]
    });
  }

  onFormSubmit(myFormGroup) {
    console.log(myFormGroup);
    this.courseService.add(myFormGroup.value).subscribe(result => {
      alert("Added");
      this.courseList.push(result);
    });
  }
}
