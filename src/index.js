import angular from 'angular';


import {movieModule} from './app/movie/index';
import {imageModule} from './app/Images/index';
import {homeAutoModule} from './app/HomeAutomation/index';
import 'angular-ui-router';
import 'checklist-model';
import routesConfig from './routes';

// import {main} from './app/movie/movieApp/main';

import './index.scss';
import './app/movie/views/listMovies/listMovies.css';

angular
  .module('app', ['checklist-model', movieModule, imageModule, homeAutoModule, 'ui.router'])
  .config(routesConfig);
  // .component('app', main);
