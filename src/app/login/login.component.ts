import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(myForm) {
    this.authService.login(myForm.value).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem("token", response.token);
      this.router.navigate(["student"]);
    });
  }
}
