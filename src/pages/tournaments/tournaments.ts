import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamsPage } from '../pages'
import { EliteApi } from "../../shared/shared";

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

  tournaments : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApi) {
  }

  tournamentTapped(tournament){
    console.log(tournament);
    this.navCtrl.push(TeamsPage, tournament);
  }

  ionViewDidLoad(){
    this.eliteApi.getTournaments().then(data => this.tournaments = data);
  }

}
