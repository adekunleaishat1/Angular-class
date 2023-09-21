import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  
   public getTodo() {
    return JSON.parse(localStorage.getItem("todo") !)
   }

   public getuser() {
    return JSON.parse(localStorage.getItem("reg_user") !)
   }

   public getCuruser() {
     return JSON.parse(localStorage.getItem("cur_user") !)
   }
} 
