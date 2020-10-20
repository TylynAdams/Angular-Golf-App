import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course } from 'src/app/interfaces/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course [];

  constructor(
    private coursesService: CoursesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }

  goToCourse(courseId: string): void {
    this.router.navigate(['./play', {id: courseId}]);
}

}
