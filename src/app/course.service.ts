import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CourseService {
  BASE_URL = "http://localhost:3000/course";
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get(this.BASE_URL, { headers: this.getHeaders() });
  }

  add(object) {
    return this.http.post(this.BASE_URL, object, {
      headers: this.getHeaders()
    });
  }

  private getHeaders() {
    const headers = new HttpHeaders({
      Authorization: "bearer " + (localStorage.getItem("token") || "")
    });
    return headers;
  }
}
