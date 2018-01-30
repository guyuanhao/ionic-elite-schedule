import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../pages'

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  teams = [
    { id: 0, name: 'Team A' },
    { id: 1, name: 'Team B' },
    { id: 2, name: 'Team C' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');
  }

  teamTapped($event, team){
    console.log("sending team : " + team);
    this.navCtrl.push(TeamHomePage, team);
  }

}
