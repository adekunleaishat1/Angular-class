import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../service/storage.service';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-onecontact',
  templateUrl: './onecontact.component.html',
  styleUrls: ['./onecontact.component.css']
})
export class OnecontactComponent {
  constructor(public paramsRoute:ActivatedRoute, public todo:StorageService){}
  public user:string = ""

  ngOnInit(): void{
    console.log(this.paramsRoute.snapshot.params['id']);
    const id = this.paramsRoute.snapshot.params['id']
    let alltodo = this.todo.getTodo()
    this.user = alltodo.find((el: string, index:number)=> index == id)
    console.log(this.user);
    
    
   
    
    
  }
}
