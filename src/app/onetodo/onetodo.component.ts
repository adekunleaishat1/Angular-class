import { Component } from '@angular/core';
import { ApiCallService } from '../service/api-call.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onetodo',
  templateUrl: './onetodo.component.html',
  styleUrls: ['./onetodo.component.css']
})
export class OnetodoComponent {
  public onetodo:any = []
  constructor(public oneTodo: ApiCallService, public paramz: ActivatedRoute){}
  public paramm:string = ""

  ngOnInit(): void{
    this.paramm = this.paramz.snapshot.params["id"]
    this.getuser(this.paramm)
  }

  getuser(paramm: string){
    this.oneTodo.getOneUser(paramm).subscribe(data=>{
      console.log(data);
      this.onetodo = data
    },(error)=>{
      console.log(error);
      
    })
  }
}
