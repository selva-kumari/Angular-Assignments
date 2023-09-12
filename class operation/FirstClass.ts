export class FirstClass{
   private empId;
   private empName;
   private empSalary;

   constructor(id:number,name:string,salary:number){
    this.empId=id;
    this.empName=name;
    this.empSalary=salary;
   }
   public show(){
       console.log(`
          Employee Id      :: ${this.empId}
          Employee Name    :: ${this.empName} 
          Employee Salary  :: ${this.empSalary}
       `)
   }
    
    
}