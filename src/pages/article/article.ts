import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-article',
  templateUrl: 'article.html'
})
export class ArticlePage {
  selectedArticle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedArticle = navParams.get('item');
  }

}
