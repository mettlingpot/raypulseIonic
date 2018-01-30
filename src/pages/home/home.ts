import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RaypulseService } from '../../services/raypulse.service';
import { EvenementPage } from '../../pages/evenement/evenement';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  article: any = new Array();
  search: string;
  constructor(public navCtrl: NavController, private raypulseService:RaypulseService) {
      this.article = [];

      this.raypulseService.getObjects()
      .then(articleFetched => {
        this.article = articleFetched;
        console.log(this.article)
      });
  }
  public getArticles(refresher) {
    this.raypulseService.getObjects()
    .then(newsFetched => {
      this.article = newsFetched;

      // Si la variable refresher est null alors on ne fait rien
      (refresher) ? refresher.complete() : null;
      console.log('Données récupérées depuis le serveur !');
    });
  }
  public rechercheArticles() {

      console.log(this.search);
    this.raypulseService.getRechercheObjects(this.search)
    .then(newsFetched => {
      this.article = newsFetched;
    });
  }
    itemTapped(item) {
      this.navCtrl.push(EvenementPage, {
        evenement: item
      });
    }
}
