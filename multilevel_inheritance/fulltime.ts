import { employee } from "./employee";
export class fullemployee extends employee{
    salary:number;
    constructor(id:number,name:String,role:String,salary:number){
        super();
        this.id=id;        
        this.name=name;
        this.role=role;
        this.salary=salary;
    }
    override Empdetails():void{
        console.log(`This is the information of full time employee details
                     ------------------*****************------------------    
                           Employee id       :: ${this.id}
                           Employee name     :: ${this.name}
                           Employee role     :: ${this.role}
                           Employee salary   :: ${this.salary}
                     ------------------*****************------------------- 
                   `);
        }
   
   
        
    }
