import { Component } from '@angular/core';
interface Student {
  name: string;
  class: string;
  email: string;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent {
  student: Student ={
    name:"",
    class: "",
    email:"",
  }
  editStudent: Student = {
    name: "",
    class: "",
    email: "",
  };
  public show = ""

  public allstudent:Student[] = []

  adduser(){
    console.log(this.allstudent),
    this.allstudent.push({...this.student})
    this.student = { name: "", class: "", email: "" };

  }
  del(index: number){
    this.allstudent.splice(index, 1)
  }
  edit(index: number){
    this.editStudent = { ...this.allstudent[index] };
  }
  saveChanges(index: number) {
    this.allstudent[index] = { ...this.editStudent };
  }
}
