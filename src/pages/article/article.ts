import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContentfulService } from '../../services/contentful.service';

@Component({
  selector: 'page-article',
  templateUrl: 'article.html'
})
export class ArticlePage {
  selectedArticle: any;
  slug: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contentfulService: ContentfulService) {
    if (this.navParams.get('item')) {
      this.selectedArticle = this.navParams.get('item');
    } else if (!this.navParams.get('item')) {
      // if user comes from link...
      this.slug = window.location.href.split("/").pop();
      this.contentfulService.getArticle(this.slug)
      .then(selectedArticle => this.selectedArticle = selectedArticle)
      .then(selectedArticle =>
        this.navCtrl.push(ArticlePage, {
          item: this.selectedArticle,
          slug: this.selectedArticle.fields.slug
        })
      )
      .catch((err) => {
        console.log("No article found error 1");
      });
    } else {
      console.log("No article found error 2");
    }
  }

}
