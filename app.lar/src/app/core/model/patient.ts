import { HealthCarePlan } from "./health-care-plan";

export class Patient {
    planCardNumber: string = "";
    name: string = "";
    age: number = 0;
    active: boolean = false;
    healthCarePlan!: HealthCarePlan;

    constructor(planCardNumber: string,  name: string, age: number, active: boolean, healthCarePlan: HealthCarePlan){
      this.planCardNumber =planCardNumber;
      this.name = name;
      this.age = age;
      this.active = active;
      this.healthCarePlan = healthCarePlan;
    }
  }
  