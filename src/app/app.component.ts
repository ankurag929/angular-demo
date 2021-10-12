import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  // template: "This is inline template",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private router: Router) {}
  title = "my-app";
  showContent: boolean = true;
  personArr = ["Shree Ganesh", "Ankit", "Ankur", "Prateek", "Temp"];
  studentArr = [
    {
      name: "Stud1",
      rollNo: 1
    },
    {
      name: "Stud2",
      rollNo: 2
    },
    {
      name: "Stud3",
      rollNo: 3
    },
    {
      name: "Stud4",
      rollNo: 4
    },
    {
      name: "Stud5",
      rollNo: 5
    }
  ];

  onStudentSubmit(event) {
    this.studentArr.push(event);
  }

  onStudentDelete(event) {
    alert(event);
  }

  onLogout() {
    localStorage.clear();
    this.router.navigate(["login"]);
  }

  isUserLoggedIn() {
    const token = localStorage.getItem("token") || "";
    return !!(token && token.length);
  }
}
