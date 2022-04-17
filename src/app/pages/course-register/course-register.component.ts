import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/service/course.service';
import { Course } from 'src/app/model/course.model';

@Component({
  selector: 'course-register',
  templateUrl: './course-register.component.html',
  styleUrls: ['./course-register.component.css']
})
export class CourseRegisterComponent implements OnInit {
  
  course: Course = new Course();
  coursesList: Course[];
  idCourse: number = 0;

  constructor(private courseService: CourseService) { }
  ngOnInit() {
    window.scroll(0, 0);

  }
    findAllCourses(){
      this.courseService.getCourses().subscribe(
        (data: Course[]) => {
          this.coursesList = data;
          console.log(data);
        }
      );
    }

    createCourse(){
      this.courseService.postCourse(this.course).subscribe(
        (data: Course) => {
          this.course = data;
          this.findAllCourses();
          this.course = new Course();
        },
        (err) => {
          console.log(err);
        }
      );
    }
}
