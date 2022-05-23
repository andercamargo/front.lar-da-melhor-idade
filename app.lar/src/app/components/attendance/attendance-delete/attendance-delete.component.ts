import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-attendance-delete',
  templateUrl: './attendance-delete.component.html',
  styleUrls: ['./attendance-delete.component.css'],
})
export class AttendanceDeleteComponent implements OnInit {
  attendance!: any;

  constructor(
    private service: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')?.toString();
    this.service.find(id || '').subscribe((attendance) => {
      this.attendance = attendance;
    });
  }

  deleteAttendance(): void {
    this.service.delete(this.attendance.id).subscribe(() => {
      this.service.showMessage('Atendimento excluido com sucesso!');
      this.router.navigate(['/attendances']);
    });
  }

  cancel(): void {
    this.router.navigate(['/attendances']);
  }
}
