import { PlayComponent } from './../components/play/play.component';
import { CoursesComponent } from './../components/courses/courses.component';
import { WelcomeComponent } from './../components/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '',   redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent },
  { path: 'play', component: PlayComponent },
  { path: 'welcome', component: WelcomeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


