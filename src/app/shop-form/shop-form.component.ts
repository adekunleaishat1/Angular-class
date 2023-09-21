import { Component } from '@angular/core';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-shop-form',
  templateUrl: './shop-form.component.html',
  styleUrls: ['./shop-form.component.css']
})
export class ShopFormComponent {
 public items:any = []
 public allitems:any = []
 public amount: string = ""
 public date:string = ""
 public curuser = {}


 constructor(public loguser:StorageService){}

 ngOnInit():void{
  this.curuser = this.loguser.getCuruser()
  console.log(this.curuser);
  

 }
 
 public obj:{item:string , price:string} = {
  item: "",
  price: ""
 }

 additems(){
 console.log(this.obj);
 this.items.push({...this.obj})
 console.log(this.items);
 let total = 0
 this.obj.price = "";
 this.obj.item = "";
 
 }
 Allitems(){
  let  tot:any = []
 this.items.forEach((element:any) => {
  tot.push(element.price)
 });
 let tt= tot.reduce((prev:any, next:any)=> Number(prev)+Number(next))
 console.log(tt);
  if (tt > this.amount) {
    alert("you have spent more than your budget, Go back and make changes");
    return;
  } else {
    let newitem = {
      items: this.items,
      amount:this.amount,
      date:this.date
    }
    console.log(newitem);
    this.allitems.push({...newitem})
    console.log(this.allitems);
    localStorage.setItem("list", JSON.stringify(this.allitems))
    this.items = [],
    this.amount ="",
    this.date = ""
  
  }
  

}
 delItems(i: number){
  this.items.splice(i, 1)
 }
showSlide = false;
 show(){
  this.showSlide = !this.showSlide;
 }
}