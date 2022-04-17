import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { CursosService } from './services/cursos.service';
import { FormsModule } from '@angular/forms';
import { CourseRegisterComponent } from './pages/course-register/course-register.component';
import { LoginComponent } from './pages/login/login.component';
import { TeacherRegisterComponent } from './pages/teacher-register/teacher-register.component';
import { TeacherDeleteComponent } from './pages/delete/teacher-delete/teacher-delete.component';
import { CourseDeleteComponent } from './pages/delete/course-delete/course-delete.component';
import { CourseEditComponent } from './pages/edit/course-edit/course-edit.component';
import { TeacherEditComponent } from './pages/edit/teacher-edit/teacher-edit.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CoursesListComponent } from './shared/courses-list/courses-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    CourseRegisterComponent,
    LoginComponent,
    TeacherRegisterComponent,
    TeacherDeleteComponent,
    CourseDeleteComponent,
    CourseEditComponent,
    TeacherEditComponent,
    LandingComponent,
    CoursesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  exports: [
    AppComponent
  ],
  providers: [
    //CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
