import { fullemployee } from "./fulltime";
export class partemployee extends fullemployee{
    period:String;
    constructor(id:number,name:String,role:String,salary:number,period:String){
        super(id,name,role,salary);
        this.period=period;
    }
    override Empdetails():void{
        console.log(`This is the information of part time employee details
                     ------------------*****************------------------    
                           Employee id       :: ${this.id}
                           Employee name     :: ${this.name}
                           Employee role     :: ${this.role}
                           Employee salary   :: ${this.salary}
                           Employee period   :: ${this.period}
                     ------------------*****************------------------- 
                   `);
        }
}