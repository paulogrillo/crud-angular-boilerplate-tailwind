import { Component } from '@angular/core';
import { CourseService } from './core/service/course.service';
import { Course } from './model/course.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  coursesList: Course[];
  constructor(private courseService: CourseService) {}
 
  // ngOnInit() {
  //   this.getListCourses();
  // }
  
  // getListCourses() {
  //    this.courseService.getCourses().subscribe(
  //      (resp: Courses[])=> {
  //        this.coursesList = resp;
  //        console.log(resp) 
  //      },
  //      (err)=>{
  //        console.log(this.coursesList) 
  //      }
  //    );
  // }
  
}
