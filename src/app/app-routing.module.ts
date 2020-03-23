import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { RegisterComponent} from './register/register.component';
import { ClassoverviewComponent} from './classoverview/classoverview.component';
import {AuthGuard} from './helpers/auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'classroom', component: ClassroomComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'classoverview', component: ClassoverviewComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
