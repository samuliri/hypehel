import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

import { ArticlePage } from '../article/article';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  articles: Entry<any>[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getArticles()
    .then(articles => this.articles = articles)
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ArticlePage, {
      item: item
    });
  }

}
