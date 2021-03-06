import angular from 'angular';

import {movieModule} from './app/movie/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';

import './index.scss';
import './app/movie/views/listMovies/listMovies.css';

angular
  .module('app', [movieModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main);
