import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeamDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {

  team: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = navParams.data;
    console.log('receive params : ' +  this.team);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage' );
  }

}
