import { Injectable } from "@angular/core";
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { LoginService } from "./login.service";

@Injectable()
export class LoginGuard implements CanActivate, CanActivateChild {
  constructor(private service: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.service.isActive()) {
      return true;
    } else {
      setTimeout(() => {
        this.router.navigate(["/login"]);
      }, 500);
      return false;
    }
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.service.isActive()) {
      return true;
    } else {
      setTimeout(() => {
        this.router.navigate(["/login"]);
      }, 500);
      return false;
    }
  }
}

@Injectable()
export class LoggedoutGuard implements CanActivate {
  constructor(private service: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.service.isActive()) {
      this.router.navigate(["/dashboard"]);
      return false;
    } else {
      return true;
    }
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.service.isActive()) {
      this.router.navigate(["/dashboard"]);
      return false;
    } else {
      return true;
    }
  }
}

@Injectable()
export class IsAdminGuard implements CanActivate {
  constructor(private service: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.service.isAdmin()) {
      return true;
    } else {
      this.router.navigate(["/dashboard"]);
      return false;
    }
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.service.isAdmin()) {
      return true;
    } else {
      this.router.navigate(["/dashboard"]);
      return false;
    }
  }
}

@Injectable()
export class IsNotGuestGuard implements CanActivate {
  constructor(private service: LoginService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.service.isGuest()) {
      this.router.navigate(["/dashboard"]);
      return false;
    } else {
      return true;
    }
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (this.service.isGuest()) {
      this.router.navigate(["/dashboard"]);
      return false;
    } else {
      return true;
    }
  }
}
