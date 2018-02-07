import { Injectable } from '@angular/core';
import { createClient, Entry, Space, ContentfulClientApi } from 'contentful';

const DEFAULT_CONFIG = {
  credentials: {
    space: '6koht02lkn17',
    accessToken: 'a60cd1289ddc66aa2fb42e5ad44fcd6c7a779850ffc45d74adda82d4e90a9cf7',
  },

  contentTypeIds: {
    article: 'article',
    category: 'category'
  }
}

@Injectable()
export class ContentfulService {
  cdaClient: ContentfulClientApi;
  config: {
    space: string,
    accessToken: string
  };
  titleHandlers: Function[]

  constructor() {
    try {
      this.config = JSON.parse(localStorage.catalogConfig);
    } catch (e) {
      this.config = DEFAULT_CONFIG.credentials;
    }

    this.titleHandlers = [];
    this._createClient();
    this.getSpace();
  }

  onTitleChange(fn): void {
    this.titleHandlers.push(fn)
  }

  // get the current space
  getSpace(): Promise<Space> {
    return this.cdaClient.getSpace()
      .then(space => {
        this.titleHandlers.forEach(handler => handler(space.name))

        return space;
      })
  }

  // fetch articles
  getArticles(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: DEFAULT_CONFIG.contentTypeIds.article
    }, query))
    .then(res => res.items);
  }

  // fetch article with a given slug
  // and return one of them
  getArticle(slug: string): Promise<Entry<any>> {
    return this.getArticles({ 'fields.slug': slug })
    .then(items => items[0])
  }

  // fetch categories
  getCategories(): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries({
      content_type: 'category'
    })
    .then(res => res.items);
  }

  // return a custom config if available
  getConfig(): { space: string, accessToken: string } {
    return this.config !== DEFAULT_CONFIG.credentials ?
      Object.assign({}, this.config) :
      { space: '', accessToken: '' };
  }

  // set a new config and store it in localStorage
  setConfig(config: {space: string, accessToken: string}) {
    localStorage.setItem('catalogConfig', JSON.stringify(config));
    this.config = config;

    this._createClient();
    this.getSpace();

    return Object.assign({}, this.config);
  }

  // set config back to default values
  resetConfig() {
    localStorage.removeItem('catalogConfig');
    this.config = DEFAULT_CONFIG.credentials;

    this._createClient();
    this.getSpace();

    return Object.assign({}, this.config);
  }

  _createClient() {
    this.cdaClient = createClient({
      space: this.config.space,
      accessToken: this.config.accessToken
    });
  }
}
