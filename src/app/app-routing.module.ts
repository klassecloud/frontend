import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { RegisterComponent} from "./register/register.component";
import { ClassoverviewComponent} from "./classoverview/classoverview.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'classroom', component: ClassroomComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'classoverview', component: ClassoverviewComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
