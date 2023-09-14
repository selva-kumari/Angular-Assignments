import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username:any="selva";
  password:any="vjselva8";
  status:string="";


  onSubmit(username:any,password:any) {
    if(this.username===username && this.password===password){
      this.status="login successfull";
    }
    else{
      this.status="login failed";
    }
         
   

}
}
