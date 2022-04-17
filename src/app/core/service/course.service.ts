import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/model/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor( private req: HttpClient) {
  
   }


   getCourses(): Observable<Course[]>{
      return this.req.get<Course[]>(`http://localhost:3000/courses`);
   }

   postCourse(course: Course): Observable<Course>{
      return this.req.post<Course>(`http://localhost:3000/courses`, course);
   }
}
