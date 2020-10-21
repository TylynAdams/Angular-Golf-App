import { Component, OnInit } from '@angular/core';

interface Course {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  courses: Course[] = [
    {value: 'fox-0', viewValue: 'Fox Hollow'},
    {value: 'thanksgiving-1', viewValue: 'Thanksgiving Point'},
    {value: 'spanish-2', viewValue: 'Spanish Oaks'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
