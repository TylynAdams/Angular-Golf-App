import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  course: Course[] = [
    {id: '1', name: 'Add Your Players'},
    {id: '2', name: 'Choose your difficulty'},
    // {id: '3', name: 'Finance'},
];


}
