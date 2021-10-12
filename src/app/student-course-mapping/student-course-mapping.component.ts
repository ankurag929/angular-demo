import { Component, OnInit } from "@angular/core";
import { StudentService } from "./../student.service";
import { CourseService } from "./../course.service";
import { MappingService } from "./../mapping.service";

@Component({
  selector: "app-student-course-mapping",
  templateUrl: "./student-course-mapping.component.html",
  styleUrls: ["./student-course-mapping.component.css"]
})
export class StudentCourseMappingComponent implements OnInit {
  studentsList = [];
  coursesList = [];
  mappingList = [];
  constructor(
    private studentService: StudentService,
    private courseService: CourseService,
    private mappingService: MappingService
  ) {}

  ngOnInit() {
    this.studentService.getList().subscribe((result: any) => {
      this.studentsList = result;
    });
    this.courseService.getList().subscribe((result: any) => {
      this.coursesList = result;
    });
    this.getMappingList();
  }

  getMappingList() {
    this.mappingService.getMappings().subscribe((result: any) => {
      this.mappingList = result;
      console.log(result);
    });
  }

  onSubmit(mappingForm) {
    console.log(mappingForm.value);
    this.mappingService
      .addMapping(mappingForm.value)
      .subscribe((result: any) => {
        console.log(result);
        mappingForm.reset();
        this.getMappingList();
      });
  }
}
