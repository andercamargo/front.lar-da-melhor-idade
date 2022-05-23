import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AttendanceDao } from './core/model/attendanceDao';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  attendanceUrl = environment.base_url_api + 'attendance/';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  listar(): Observable<any> {
    return this.http.get<Array<any>>(this.attendanceUrl + 'findAll');
  }

  find(id: string): Observable<any> {
    return this.http.get<any>(this.attendanceUrl + 'findById/' + id);
  }

  create(attendance: AttendanceDao) {
    return this.http.post(this.attendanceUrl + 'create/', attendance, {responseType: 'text'});
  }

  delete(id: number) {
    return this.http.delete(this.attendanceUrl + 'delete/' + id, {});
  }

  update(attendance: AttendanceDao) {
    return this.http.put(this.attendanceUrl + 'update/' , attendance, {responseType: 'text'});
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }
}
