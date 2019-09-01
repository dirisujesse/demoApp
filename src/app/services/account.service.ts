import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "environments/environment";
import "rxjs/add/operator/map";

@Injectable()
export class AccountsService {
  url = "";// `${environment.API_URL}/account`;
  constructor(private http: HttpClient, private router: Router) {}

  getAccounts() {
    return this.http.get(this.url).map(res => JSON.parse(JSON.stringify(res)));
  }

  createAccount(data) {
    return this.http
      .post(this.url, JSON.stringify(data))
      .map(res => JSON.parse(JSON.stringify(res)));
  }

  updateAccount(data) {
    return this.http
      .put(`${this.url}/${data.id}`, JSON.stringify(data))
      .map(res => JSON.parse(JSON.stringify(res)));
  }

  changePassword(data) {
    return this.http
      .post(`${this.url}/changepassword`, JSON.stringify(data))
      .map(res => JSON.parse(JSON.stringify(res)));
  }

  deleteAccount(id) {
    return this.http.delete(`${this.url}/${id}`).map(res => JSON.parse(JSON.stringify(res)));
  }
}
