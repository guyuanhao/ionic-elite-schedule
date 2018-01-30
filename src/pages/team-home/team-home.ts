import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { StandingsPage, TeamDetailPage } from '../pages'

/**
 * Generated class for the TeamHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {

  team:any;

  teamDetailTab = TeamDetailPage;
  StandingsTab = StandingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
  }

  goHome(){
    this.navCtrl.popToRoot();
  }
}
