import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MappingService {
  constructor(private httpClient: HttpClient) {}

  BASE_URL = "http://localhost:3000/mapping";
  addMapping(object) {
    return this.httpClient.post(this.BASE_URL, object);
  }

  getMappings() {
    return this.httpClient.get(this.BASE_URL);
  }
}
