import { Component } from "@angular/core";
import { Router } from "@angular/router";

import {
  LoginService,
} from "../services";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  user_type = "staff";
  message: any;
  email: any;
  password: any;
  loading: boolean;

  constructor(
    public service: LoginService,
    private router: Router,
  ) { }

  login(email, password, user_type = "staff") {
    if (!(email && password)) {
      this.message = "Please provide email and password";
      return;
    }
    this.loading = true;
    this.message = "";
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("id", "845jkfg");
    sessionStorage.setItem("token", "hydjnouidfh84");
    sessionStorage.setItem("admin", "true");
    sessionStorage.setItem("password", btoa(password));
    this.router.navigate(["/stations"]);
  }

  gotoDash() {
    this.router.navigate(["/stations"]);
  }
}
