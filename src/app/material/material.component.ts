import { Component } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  public toggle:boolean = true
 show(){
  this.toggle = !this.toggle
 }
}
