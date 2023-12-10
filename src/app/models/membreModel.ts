export class membreModel {
    id?:number;
    Name!: String;
    Age!: String;
    constructor(Name: String,
        Age: String,
        
        ) {
            this.Name=Name;
            this.Age=Age;
    }
}