export class Doctor {
  name: string = '';
  age: number = 0;
  crm: string = '';
  active: boolean = false;

  constructor(name: string, age: number, crm: string, active: boolean) {
    this.name = name;
    this.age = age;
    this.crm = crm;
    this.active = active;
  }
}
