import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { ContentfulService } from '../../services/contentful.service';
import { Entry } from 'contentful';

import { ArticlePage } from '../article/article';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  articles: Entry<any>[];
  tabTitle: any;
  showSelected : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contentfulService: ContentfulService, public platform: Platform) {
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
    } else if (this.tabTitle == "Chill") {
      this.contentfulService.getArticles(({'fields.category.sys.id': '4sncedgSu4yU2umi00U6mO'}))
      .then(articles => this.articles = articles)
    } else if (this.tabTitle == "Club") {
      this.contentfulService.getArticles(({'fields.category.sys.id': 'WkZ3h2GKsgAG8SU44aSYM'}))
      .then(articles => this.articles = articles)
    } else if (this.tabTitle == "Art") {
      this.contentfulService.getArticles(({'fields.category.sys.id': '25myJzzEPyEeUckoeoWsYQ'}))
      .then(articles => this.articles = articles)
    }

    if (this.platform.is('cordova')) {
      this.showSelected = true;
    }
  }

  itemTapped(event, item) {
    let slug = this.slugify(item.fields.heading);
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ArticlePage, {
      item: item,
      slug: slug
    });
  }

  openMap(event, item) {
    this.navCtrl.push(MapPage, {
      item: item
    });
  }

  slugify(text) {
    if(text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
    }
  }

}
