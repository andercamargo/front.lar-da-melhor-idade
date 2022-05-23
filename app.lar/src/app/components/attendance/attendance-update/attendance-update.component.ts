import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/app.service";
import { AttendanceStatus } from "src/app/core/enum/attendance.status.enum";

@Component({
  selector: "app-attendance-update",
  templateUrl: "./attendance-update.component.html",
  styleUrls: ["./attendance-update.component.css"],
})
export class AttendanceUpdateComponent implements OnInit {
  attendance!: any;
  attendancesStatus = AttendanceStatus;
  keys! : any[];

  constructor(
    private service: AppService,
    private router: Router,
    private route: ActivatedRoute
  ) { 
    this.keys = Object.values(this.attendancesStatus);
    console.log(this.keys);
   }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')?.toString();
    console.log(this.attendancesStatus);
    this.service.find(id || '').subscribe((attendance) => {
      this.attendance = attendance;
    });
  }

  updateAttendance(): void {
     this.service.update(this.attendance).subscribe(() => {
       this.service.showMessage("Atendimento atualizado com sucesso!");
       this.router.navigate(["/attendances"]);
     });
  }

  cancel(): void {
    this.router.navigate(["/attendances"]);
  }
}
