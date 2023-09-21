import { Component } from '@angular/core';
import { ApiCallService } from '../service/api-call.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  constructor(public getuser:ApiCallService, public getdata: ApiCallService){}
  public todo:any = []
  public data:any = []



  ngOnInit(): void{
    this.getAllTodo()
    console.log("sdfghjkl");
    this.lohThis()
    this.getallData()
  }
  lohThis(){
    console.log("uytrewesdfgg");
    
  }
  getAllTodo(){
   this.getuser.getuser().subscribe(data =>{
    this.todo = data
    console.log(this.todo.users);
   })
  }
  getallData(){
    this.getdata.getData().subscribe(data =>{
    this.data = data
    console.log(this.data);
    
    })
  }
}
