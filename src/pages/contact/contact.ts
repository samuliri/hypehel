import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  name = '';
  email = '';
  message = '';
  btn = 'Send';

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) { }

  addItem() {
    if (this.name != '' && this.email != '' && this.message != '') {
      this.firebaseProvider.addItem(this.name +', '+ this.email +', '+ this.message);
      this.name = '';
      this.email = '';
      this.message = '';
      this.btn = 'Thanks';
    } else {
      this.btn = 'Send (All fields required)';
    }
  }

}
