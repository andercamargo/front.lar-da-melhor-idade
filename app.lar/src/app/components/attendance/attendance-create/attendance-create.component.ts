import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { AttendanceStatus } from 'src/app/core/enum/attendance.status.enum';
import { AttendanceDao } from 'src/app/core/model/attendanceDao';
import { Doctor } from 'src/app/core/model/doctor';
import { HealthCarePlan } from 'src/app/core/model/health-care-plan';
import { Patient } from 'src/app/core/model/patient';

@Component({
  selector: 'app-attendance-create',
  templateUrl: './attendance-create.component.html',
  styleUrls: ['./attendance-create.component.css']
})
export class AttendanceCreateComponent implements OnInit {

  attendance: any = {
    doctor: '',
    doctorAge: 0,
    crm:'',
    patient: '',
    age :0,
    planCardNumber: 0,
    healthPlanCode: 0,
    healthPlanName: '',
    anamnesis: '',
    therapeuticApproach: '',
    prescription: '',
    status: AttendanceStatus.Started
  }

  constructor(private service: AppService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  create(){
    const active = true;
    const healthPlan = new HealthCarePlan(this.attendance.healthPlanCode, this.attendance.healthPlanName, active);
    const patient = new Patient(this.attendance.planCardNumber, this.attendance.patient, this.attendance.age, active, healthPlan);
    const doctor = new Doctor(this.attendance.doctor, this.attendance.doctorAge, this.attendance.crm, active);
    const attendance = new AttendanceDao(new Date(), doctor, this.attendance.anamnesis, this.attendance.therapeuticApproach, this.attendance.prescription, patient, this.attendance.status);

    this.service.create(attendance).subscribe((value) => {
      this.service.showMessage('Atendimento criado com sucesso!');
      this.router.navigate(['/attendances']);
    });
  }

  cancel(): void {
    this.router.navigate(['/attendances'])
  }
}
