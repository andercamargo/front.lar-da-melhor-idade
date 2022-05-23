export class HealthCarePlan{
    code: string = "";
    name: string = "";
    active: boolean = false;


    constructor(code: string, name: string, active: boolean){
        this.code = code;
        this.name = name;
        this.active = active;
    }
}