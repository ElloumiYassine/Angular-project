import { membreModel } from "./membreModel";

export class actionModel {
    id?:number;
    actionName!: String;
    objectif!: String;
    responsable!: membreModel;
    nbPers!: number;
    date!: Date;
    accepted?:boolean=false;
    constructor(actionName: String,
        objectif: String,
        responsable: membreModel,
        nbPers: number,
        date: Date
        ) {
            this.actionName=actionName;
            this.objectif=objectif;
            this.responsable=responsable;
            this.nbPers=nbPers;
            this.date=date;

    }
}