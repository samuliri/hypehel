import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MatCardModule } from '@angular/material';
import { HypeHEL } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ArticlePage } from '../pages/article/article';
import { MapPage } from '../pages/map/map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ContentfulService } from '../services/contentful.service';
import { MarkdownModule } from 'angular2-markdown';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { GoogleMaps } from '@ionic-native/google-maps';

var firebaseConfig = {
  apiKey: "AIzaSyDMvG8QaR9Vg6RH8oibvzM5tsMZk4CKlyU",
  authDomain: "hypehel-66939.firebaseapp.com",
  databaseURL: "https://hypehel-66939.firebaseio.com",
  projectId: "hypehel-66939",
  storageBucket: "hypehel-66939.appspot.com",
  messagingSenderId: "501749117975"
};

@NgModule({
  declarations: [
    HypeHEL,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ArticlePage,
    MapPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(HypeHEL, {}, {
        links: [
          { component: HomePage, segment: 'home', name: 'Home' },
          { component: ArticlePage, segment: 'article/:slug', name: 'Article' },
        ]
      }),
    MarkdownModule.forRoot(),
    MatCardModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HypeHEL,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ArticlePage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContentfulService,
    FirebaseProvider,
    GoogleMaps
  ]
})
export class AppModule {}
