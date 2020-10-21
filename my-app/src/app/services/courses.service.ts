import { Course } from 'src/app/interfaces/course';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[] = [
    {id: '1', name: 'Add Your Players'},
    {id: '2', name: 'Choose Your Difficulty'},
    {id: '3', name: 'Start New Game '},
];

constructor(
  private http: HttpClient
) { }

getCourses(): Observable<Course[]> {
  return this.http.get<Course[]>(`http://golf-courses-api.herokuapp.com/#api`);
}


}
