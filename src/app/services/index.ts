import { LoginService } from "./login.service";
import { AccountsService } from "./account.service";

import { LoginGuard, LoggedoutGuard, IsAdminGuard, IsNotGuestGuard } from "./login.guard";

export const SERVICES = [
  LoginService,
  AccountsService,
];

export const GUARDS = [
  LoginGuard,
  LoggedoutGuard,
  IsAdminGuard,
  IsNotGuestGuard
];


export * from "./account.service";
export * from "./login.service";
export * from "./login.guard";
