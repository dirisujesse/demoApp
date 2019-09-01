import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "environments/environment";

import "rxjs/add/operator/map";

@Injectable()
export class LoginService {
  // url = `${environment.API_URL}/account`;

  constructor(private http: HttpClient, private router: Router) {}

  login(email, password, admin: boolean | string = false) {
    if (email && password) {
      // const url = `${environment.API_URL}/auth/login/`;
      const body =
        admin === true
          ? {email: email, password: password, role: 'admin'}
          : admin === "guest"
            ? {email: email, password: password, role: 'guest'}
            : {email: email, password: password, role: 'staff'};
      return this.http.post("", JSON.stringify(body)).map(res => {
        return JSON.parse(JSON.stringify(res));
      });
    }
  }

  gotoDash() {
    const id = sessionStorage.getItem("id");
    if (id !== null && id !== "undefined") {
      this.router.navigate(["/dashboard/clockins)"]);
    }
  }

  isActive(): boolean {
    return (
      sessionStorage.getItem("id") !== null &&
      sessionStorage.getItem("email") !== null
    );
  }

  isAdmin(): boolean {
    return sessionStorage.getItem("admin") === "true";
  }

  passChanged(): boolean {
    return sessionStorage.getItem("password_changed") === "true";
  }

  isGuest(): boolean {
    return sessionStorage.getItem("admin") === "guest";
  }

  getEmail() {
    return sessionStorage.getItem("email");
  }

  getId() {
    return sessionStorage.getItem("id");
  }

  getPassword() {
    const password = sessionStorage.getItem("password");
    return password ? password : "";
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(["/login"]);
  }
}
