import { Component } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent {
  public toggle :boolean = true;
 drop() {
  
   this.toggle = !this.toggle
 }
}
