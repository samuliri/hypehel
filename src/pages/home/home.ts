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
  tabTitle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contentfulService: ContentfulService) {
    this.tabTitle = navCtrl['tabTitle'];
  }

  ngOnInit() {
    // console.log(this.tabTitle);
    if (this.tabTitle == "All") {
      this.contentfulService.getArticles()
      .then(articles => this.articles = articles)
    } else if (this.tabTitle == "Eat") {
      this.contentfulService.getArticles(({'fields.category.sys.id': '6IAjPoV7JCOKsgSwoiaiOC'}))
      .then(articles => this.articles = articles)
    } else if (this.tabTitle == "Shop") {
      this.contentfulService.getArticles(({'fields.category.sys.id': '4kc5Zgva48sMwiAKMiqkqi'}))
      .then(articles => this.articles = articles)
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ArticlePage, {
      item: item
    });
  }

}
