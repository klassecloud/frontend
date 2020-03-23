import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { GraphQLModule } from './graphql.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ClassoverviewComponent } from './classoverview/classoverview.component';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import {ErrorInterceptor} from './helpers/error.interceptor';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      ClassroomComponent,
      RegisterComponent,
      ClassoverviewComponent
   ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule,
        GraphQLModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
   providers: [
     {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
     {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
