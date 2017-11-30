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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ContentfulService } from '../services/contentful.service';
import { MarkdownModule } from 'angular2-markdown';

@NgModule({
  declarations: [
    HypeHEL,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ArticlePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(HypeHEL),
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
    ArticlePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContentfulService
  ]
})
export class AppModule {}
