import{student} from './Student';
export class studentinfo extends student{
    id:number;
    name:String;
    dept:String;

    constructor (id:number,name:String,dept:String){
        super();
        this.id=id;
        this.name=name;
        this.dept=dept;
    }
    override display():void{
        console.log(`The student id is ${this.id}`);
        console.log(`The student name is ${this.name}`);
        console.log(`The student dept is ${this.dept}`);
    }
}