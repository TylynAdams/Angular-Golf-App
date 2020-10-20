import { Player } from './../../interfaces/player';
import { CoursesService } from './../../services/courses.service';
import { Course } from 'src/app/interfaces/course';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
    courses: Course [];
    course: Course;
    playerNameFC = new FormControl('', this.nameValidator());
    players: Player[] = [];
    playerId = 0;

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
    this.course = this.courses.find(course => course.id === this.route.snapshot.params['id']);
}
addPlayer(): void {
  if (this.playerNameFC.value) {
      this.playerId++;

      this.players.push({
          id: this.playerId.toString(),
          courseId: this.course.id,
          name: this.playerNameFC.value,
          // below might cause some problems
          score: Math.floor(Math.random() * 50) + 50,
      });

      this.playerNameFC.setValue('');
  }
}

nameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
      let error = null;
      if (this.players && this.players.length) {
          this.players.forEach(player => {
              if (player.name.toLowerCase() === control.value.toLowerCase()) {
                  error = {duplicate: true};
              }
          });
      }
      return error;
  };
}


}
