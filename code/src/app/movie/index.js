import angular from 'angular';

import listMovies from './views/listMovies/listMovies';
import myDataService from './services/data.service';
import movieService from './services/application.service';
import movieComponent from './views/movieComponent/movie.component';

export const movieModule = 'movies';

angular
  .module(movieModule, [])
  .component('listMovies', listMovies)
  .component('movieComponent', movieComponent)
  .factory('myDataService', myDataService)
  .factory('movieService', movieService);
