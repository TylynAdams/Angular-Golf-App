import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[] = [
    {id: '1', name: 'Add Your Players'},
    {id: '2', name: 'Choose Your Difficulty'},
    {id: '3', name: 'Start New Game '},
];


}
