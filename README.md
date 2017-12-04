# HypeHEL

[http://www.hypehel.com](http://www.hypehel.com)

## Features

- [Ionic 3](http://ionicframework.com/)
- [Angular 5](https://angular.io)
- [Firebase](https://firebase.google.com/)
- [Node.js](https://nodejs.org/)
- [Contentful](https://www.contentful.com/)
- [Heroku](https://www.heroku.com/)

## Quick Start

```sh
# Make sure you have latest Node and NPM versions
$ npm install
$ npm run serve
```

### NPM Scripts Commands

| Task              | Description                                            |
|-------------------|--------------------------------------------------------|
| `start`           | Run node index.js                                      |
| `clean`           | Run ionic clean                                        |
| `build`           | Run ionic basic build                                  |
| `lint`            | Run ionic tslint                                       |
| `serve`           | Run ionic serve                                        |
| `prod`            | Full production build                                  |

## Ionic CLI

```bash
# iOS build example
$ sudo npm install -g ionic cordova
$ ionic cordova platform add ios
$ ionic cordova run ios
```

## Project structure

```
.
├── resources           # Cordova resources
├── src                 # Uncompiled source code
│   ├── app
│   ├── assets
│   ├── pages
│   ├── services
│   ├── theme
│   ├── index.html      # Main entry point
│   └── ...
├── www                 # Compiled files
│   ├── assets
│   ├── build
│   |   ├── main.js     # Concatenated app file
│   |   └── ...
│   └── ...
└── ...                 # Config files etc.
```

## Deployment

```bash
# Build prod
$ npm run prod
# Git add/commit/push
$ git add .
$ git commit -m "Commit message"
$ git push
```
Every push to master will deploy a new production version of this Heroku app.

## TODO

- [x] Angular 5
- [ ] Google Maps API
- [ ] Instagram API

## License

Copyright (c) 2017 Samuli Ristimäki
Source code is open source and released under the MIT license.
