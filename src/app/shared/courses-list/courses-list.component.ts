import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/core/service/course.service';
import { Course } from 'src/app/model/course.model';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  faEllipsisVertical = faEllipsisVertical;
  coursesList: Course[];
  
  constructor(private courseService: CourseService) { }
  ngOnInit() {
    window.scroll(0, 0);
    this.findAllCourses();
  }
    findAllCourses(){
      this.courseService.getCourses().subscribe(
        (data: Course[]) => {
          this.coursesList = data;
          console.log(data);
        }, (err) => {
          console.log(err);
        }
      );
    }

}
