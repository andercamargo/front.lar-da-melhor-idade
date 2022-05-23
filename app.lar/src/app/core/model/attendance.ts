import { AttendanceStatus } from "../enum/attendance.status.enum";
import { Doctor } from "./doctor";
import { Patient } from "./patient";

export class Attendance {
    id: string = "";
    startDate: Date = new Date();
    endDate!: Date;
    doctor!: Doctor;
    anamnesis: string = "";
    therapeuticApproach: string = "";
    prescription: string = "";
    patient!: Patient;
    status: AttendanceStatus =  AttendanceStatus.Started


    constructor(id: string, startDate: Date, doctor: Doctor, anamnesis: string, therapeuticApproach: string, prescription: string, patient: Patient, status: AttendanceStatus){
        this.startDate = startDate;
        this.doctor = doctor;
        this.anamnesis = anamnesis;
        this.therapeuticApproach = therapeuticApproach;
        this.prescription = prescription;
        this.patient = patient;
        this.status = status;
    }
 }