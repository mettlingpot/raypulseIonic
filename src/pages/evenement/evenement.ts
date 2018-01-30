import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-evenement',
  templateUrl: 'evenement.html'
})
export class EvenementPage {

public evenement;

  constructor(public navCtrl: NavController,public navParams: NavParams) {

        this.evenement = navParams.get("evenement");
        console.log(this.evenement)
  }

}
