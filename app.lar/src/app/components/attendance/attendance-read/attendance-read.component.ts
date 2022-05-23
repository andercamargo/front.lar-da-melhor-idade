import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-attendance-read',
  templateUrl: './attendance-read.component.html',
  styleUrls: ['./attendance-read.component.css'],
})
export class AttendanceReadComponent implements OnInit {
  attendances!: Array<any>;
  erro: any;
  displayedColumns = ['id', 'name', 'status', 'action'];

  constructor(private service: AppService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar().subscribe(
      (data: any) => {
        this.attendances = data;
        console.log('data:', data);
      },
      (error: any) => {
        this.erro = error;
        console.log('ERROR:', error);
      }
    );
  }
}
