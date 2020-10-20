import { CourseService } from '../../services/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/course';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course [];

  constructor(
    private courseService: CourseService,
  ) { }

  ngOnInit(): void {
    this.course = this.courseService.course;
  }

}
