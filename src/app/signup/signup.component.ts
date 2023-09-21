import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public userDetails:any =[]
 public username:string = ""
 public password:string = ""
 public email:string = ""
 constructor(public route: Router){}
 ngOnInit(): void{
  this.userDetails = JSON.parse(localStorage.getItem("reg_user") !) || []
  console.log(this.userDetails);
  
 }
 

 signup = () =>{
  if (this.username === "" || this.password === "" || this.email === "") {
    alert("input field cannot be empty")
  } else {
    let user: any = {username: this.username, email:this.email, password: this.password}
    console.log(user);
    this.userDetails.push(user);
    localStorage.setItem("reg_user", JSON.stringify(this.userDetails)) 
    this.email ="",
    this.password ="",
    this.username = ""
    this.route.navigate(['/login'])
  }
  
 }
}
