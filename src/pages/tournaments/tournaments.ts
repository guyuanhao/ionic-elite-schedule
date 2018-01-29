import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamsPage } from '../pages'

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tournamentTapped(){
    this.navCtrl.push(TeamsPage);
  }

}
