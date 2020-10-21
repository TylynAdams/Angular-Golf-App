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
    // Might need to take this out too
    weekdays: string[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];



  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.courses = this.coursesService.courses;
    this.course = this.courses.find(course => course.id === this.route.snapshot.params['id']);
}
// Might need to be changed
addPlayer(): void {
  if (this.playerNameFC.value) {
      this.playerId++;

      this.players.push({
          id: this.playerId.toString(),
          courseId: this.course.id,
          name: this.playerNameFC.value,
          score: Math.floor(Math.random() * 50) + 50,
          monday: 0,
          tuesday: 0,
          wednesday: 0,
          thursday: 0,
          friday: 0,
          saturday: 0,
          sunday: 0
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
// might change
getTotalHours(player: Player): number {
  return player.monday + player.tuesday + player.wednesday
      + player.thursday + player.friday + player.saturday + player.sunday;
}

deletePlayer(index: number): void {
  this.players.splice(index, 1);
}


}
