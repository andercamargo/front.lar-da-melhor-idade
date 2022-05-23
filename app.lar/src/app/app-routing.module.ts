import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendanceCreateComponent } from './components/attendance/attendance-create/attendance-create.component';
import { AttendanceDeleteComponent } from './components/attendance/attendance-delete/attendance-delete.component';
import { AttendanceUpdateComponent } from './components/attendance/attendance-update/attendance-update.component';
import { LoginComponent } from './components/login/login.component';
import { SingInComponent } from './components/singin/singin.component';
import { SignUpComponent } from './components/singup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { AttendanceCrudComponent } from './views/attendance-crud/attendance-crud.component';
import { PrincipalComponent } from './views/principal/principal.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'email-login', component: SingInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: "attendances", component: AttendanceCrudComponent, canActivate: [AuthGuard]},
  { path: "attendances/create", component: AttendanceCreateComponent, canActivate: [AuthGuard]},
  { path: "attendances/update/:id", component: AttendanceUpdateComponent, canActivate: [AuthGuard]},
  { path: "attendances/delete/:id", component: AttendanceDeleteComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
