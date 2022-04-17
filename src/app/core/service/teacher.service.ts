import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
  export class TeacherService {
  
    private url = 'https://api.github.com/users/defunkt'
  
    constructor(
      private http: HttpClient
    ){ }
  
    getCursos(){
      return this.http.get<Cursos[]>(this.url);
    }
  
    postCursos(cursos: Cursos): Observable<Cursos>{
      return this.http.post<Cursos>(this.url, Cursos);
    }
  
  
  }
  