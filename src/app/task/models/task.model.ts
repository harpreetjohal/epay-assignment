export class Task{
    public id:number;
    public value:string;
    constructor(model?: Task) {
        if (!model) {
            return;
        }
        this.id = model.id;
        this.value = model.value;
       
    }
}