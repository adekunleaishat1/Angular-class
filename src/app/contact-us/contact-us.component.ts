import { Component } from '@angular/core';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  constructor (public myTodo: StorageService){}

   public users:Array<string> = []

   ngOnInit(): void{
    this.users = this.myTodo.getTodo()
    console.log(this.users);
    
   }
}
