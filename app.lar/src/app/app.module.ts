import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AngularFireAnalyticsModule,
  UserTrackingService,
} from '@angular/fire/compat/analytics';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingInComponent } from './components/singin/singin.component';
import { SignUpComponent } from './components/singup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card'; 
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import { MatSidenavModule } from  '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { AttendanceCreateComponent } from './components/attendance/attendance-create/attendance-create.component';
import { AttendanceReadComponent } from './components/attendance/attendance-read/attendance-read.component';
import { AttendanceCrudComponent } from './views/attendance-crud/attendance-crud.component';
import { AttendanceDeleteComponent } from './components/attendance/attendance-delete/attendance-delete.component';
import { AttendanceUpdateComponent } from './components/attendance/attendance-update/attendance-update.component';
import { ForDirective } from './directives/for.directive';
import { RedDirective } from './directives/red.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { PrincipalComponent } from './views/principal/principal.component';
import { AuthGuard } from './guards/auth.guard';
import { InterceptorModule } from './interceptors/interceptor.module';
import { NumbersOnlyInputDirective } from './directives/numbersonly.directive';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    PrincipalComponent, 
    LoginComponent, 
    SignUpComponent, 
    SingInComponent,
    AttendanceCrudComponent,
    AttendanceCreateComponent,
    AttendanceReadComponent,
    AttendanceUpdateComponent,
    AttendanceDeleteComponent,
    RedDirective,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ForDirective,
    NumbersOnlyInputDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,   
    ReactiveFormsModule,   
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    BrowserAnimationsModule,
    MatIconModule, 
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    InterceptorModule,
    MatSelectModule,
  ],
  providers: [UserTrackingService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
