import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { StudentComponent } from "./student/student.component";
import { StudentNewComponent } from "./student-new/student-new.component";
import { MyComponent } from "./my-component/my-component";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { StudentListComponent } from "./student-list/student-list.component";
import { CourseComponent } from "./course/course.component";
import { CourseService } from "./course.service";
import { StudentCourseMappingComponent } from "./student-course-mapping/student-course-mapping.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { AuthGuard } from "./auth.guard";
import { MyDirectiveDirective } from './my-directive.directive';
import { MyPipePipe } from './my-pipe.pipe';

let routes: Routes = [
  {
    path: "student",
    canActivate: [AuthGuard],
    component: StudentFormComponent
  },
  {
    path: "course",
    canActivate: [AuthGuard],
    component: CourseComponent
  },
  {
    path: "mapping",
    canActivate: [AuthGuard],
    component: StudentCourseMappingComponent
  },
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentNewComponent,
    MyComponent,
    ParentComponent,
    ChildComponent,
    StudentFormComponent,
    StudentListComponent,
    CourseComponent,
    StudentCourseMappingComponent,
    LoginComponent,
    SignupComponent,
    MyDirectiveDirective,
    MyPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
