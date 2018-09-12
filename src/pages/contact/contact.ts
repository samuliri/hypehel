import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  name = '';
  email = '';
  message = '';
  btn = 'Send';
  showSelected : boolean = false;

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider, public platform: Platform) {}

  ngOnInit() {
    if (!this.platform.is('cordova')) {
      this.showSelected = true;
    }
  }

  addItem() {
    /* if (this.name != '' && this.email != '' && this.message != '') {
      this.firebaseProvider.addItem(this.name +', '+ this.email +', '+ this.message);
      this.name = '';
      this.email = '';
      this.message = '';
      this.btn = 'Thanks';
    } */
    if (this.message != '') {
      this.firebaseProvider.addItem(this.message);
      this.message = '';
      this.btn = 'Thanks';
    } else {
      this.btn = 'Send (Message required)';
    }
  }

}
