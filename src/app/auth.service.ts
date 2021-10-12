import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  BASE_URL = "http://localhost:3000/auth";
  signup(object) {
    return this.httpClient.post(this.BASE_URL + "/signup", object);
  }
  login(object) {
    return this.httpClient.post(this.BASE_URL + "/login", object);
  }
}
