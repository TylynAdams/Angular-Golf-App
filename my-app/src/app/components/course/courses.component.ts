import { CoursesService } from '../../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/interfaces/courses';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Courses[];

  constructor(
    private coursesService: CoursesService,
  ) { }

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
  }

}
