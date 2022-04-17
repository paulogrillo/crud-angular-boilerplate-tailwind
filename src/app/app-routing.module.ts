import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseRegisterComponent } from './pages/course-register/course-register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { CoursesListComponent } from './shared/courses-list/courses-list.component';

const routes: Routes = [
  { path: 'cadastro-cursos', component: CourseRegisterComponent },
 // { path: '', component: LandingComponent }
 { path: '', component: CoursesListComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
