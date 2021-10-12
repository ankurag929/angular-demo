import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StudentService {
  BASE_URL = "http://localhost:3000/student";
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get(this.BASE_URL);
  }

  add(studentObject) {
    return this.http.post(this.BASE_URL, studentObject);
  }

  delete(studentId) {
    return this.http.delete(this.BASE_URL + "/" + studentId);
  }

  update(studentId, studentName) {
    return this.http.put(this.BASE_URL + "/" + studentId, {
      name: studentName
    });
  }
}
