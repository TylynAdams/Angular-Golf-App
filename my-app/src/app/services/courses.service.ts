import { Injectable } from '@angular/core';
import { Courses } from '../interfaces/courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Courses[] = [
    {id: '1', name: 'Add Your Players'},
    {id: '2', name: 'Choose your difficulty'},
    // {id: '3', name: 'Finance'},
];


}
