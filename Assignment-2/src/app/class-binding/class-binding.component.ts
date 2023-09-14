import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  isClicked: boolean = false;

  toggleStyle() {
    this.isClicked = !this.isClicked;
  }

  postData(text: any) {
    alert("You type the Message of " + text)
  }
  status: string = ""
  PrimeOrNot(num: any) {
    let number = num as number;
    let flag = true;
    for (let i = 2; i<=number/2; i++) {
      if (number % i === 0) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
    if (flag) {
      this.status= "Its a Prime number";
    } else {
      this.status = "Its Not a Prime Number"
    }

  }

}
