import { HeaderService } from '../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-attendance-crud',
  templateUrl: './attendance-crud.component.html',
  styleUrls: ['./attendance-crud.component.css']
})
export class AttendanceCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Prontuário Médico',
      icon: 'article',
      routeUrl: '/attendances'
    }
  }

  ngOnInit(): void {
  }

  navigateToAttendanceCreate(): void {
    this.router.navigate(['/attendances/create'])
  }

}
