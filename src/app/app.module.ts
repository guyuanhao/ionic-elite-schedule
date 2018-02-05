import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyTeamsPage } from './../pages/pages';
import { TournamentsPage } from './../pages/pages';
import { TeamsPage } from './../pages/pages';
import { GamePage } from './../pages/pages';
import { TeamDetailPage } from './../pages/pages';
import { TeamHomePage } from './../pages/pages';
import { StandingsPage } from './../pages/pages';

import { EliteApi } from "./../shared/shared";

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    GamePage,
    TeamDetailPage,
    TeamHomePage,
    StandingsPage
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    GamePage,
    TeamDetailPage,
    TeamHomePage,
    StandingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EliteApi
  ]
})
export class AppModule {}
