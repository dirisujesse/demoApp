import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityModule } from '@clr/angular';

import { AppComponent } from './app.component';

import { SERVICES, GUARDS } from './services';

import { AppRoutingModule, ROUTED_COMPONENTS } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    ... ROUTED_COMPONENTS,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    ...GUARDS,
    ...SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
