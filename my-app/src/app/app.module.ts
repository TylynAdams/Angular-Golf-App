import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesComponent } from './components/courses/courses.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PlayComponent } from './components/play/play.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    WelcomeComponent,
    PlayComponent,
    TopNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
