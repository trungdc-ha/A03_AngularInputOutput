import {Component, OnInit} from '@angular/core';
import {Student} from "../model/Student";
import {StudentService} from "../service/student.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'AngularTemplate';
  isDisplay:boolean = true;

  student: Student | undefined;
  studentList: Student[] | undefined;

  constructor(private _studentService:StudentService) {
  }

  ngOnInit(): void {
    this.studentList = this._studentService.studentList;
  }

  onToggle() {
    this.isDisplay = !this.isDisplay;
  }

  showDetail(item:Student) {
    this.student = item;
  }

  getNewStudent(value: Student) {
    // this.studentList.unshift(value);
    this._studentService.save(value);
  }
}
