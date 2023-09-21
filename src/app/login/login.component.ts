import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username:string = "" 
  public password:string = "" 
  public users:Array<object> = []

  constructor(public route:Router, public user:StorageService){}
  ngOnInit():void{
   this.users = this.user.getuser()
    console.log(this.users);
    
  }

  login(){
    const loguser = this.users.find((e:any )=> e.password === this.password || e.username === this.username)
    if (loguser) {
      alert("login successful")
      localStorage.setItem("cur_user", JSON.stringify(loguser))
      this.route.navigate(['/shop'])
    }else{
      alert("user not found")
      return;
    }
    this.username = "",
    this.password = ""
 }

}

