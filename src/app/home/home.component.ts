import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public route:Router){}

   name = "Daniel"
   obj= {
    name:"Aishat",
    age: 10,
    class: "Angular"
   }

   public todo = ""
   public alltodo:Array<string> = []
   public show = ""
   public date = new Date()
   ngOnInit():void{
    console.log((localStorage.getItem("todo")));
    // this.alltodo = JSON.parse(localStorage.getItem("todo") ! ) || []
    this.alltodo = JSON.parse(localStorage["todo"])
   }
   addtodo(){
    console.log(this.todo),
    this.alltodo.push(this.todo)
    localStorage.setItem("todo", JSON.stringify(this.alltodo))
    this.show = this.todo
    console.log(this.alltodo);
    this.route.navigate(["contact"])
    
   }
   deltodo(i:number){
    this.alltodo.splice(i, 1)
   }
}
