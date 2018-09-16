import angular from 'angular';

import zeotapApp from './views/zeotapApp/index';
import brandList from './views/BrandList/brandList';
import brandlistHeader from './views/brandListHeader/brandListHeader';
import brandlistBody from './views/BrandListBody/brandlistBody';
import myDataService from './services/data.service';
import BrandService from './services/application.service';
import dateFilter from './filters/dateFilter';

import './views/BrandList/brandList.scss';
import './views/brandListHeader/brandListHeader.scss';
import './views/BrandListBody/brandlistBody.scss';

export const zeotapModule  = 'zeotap';

angular
  .module(zeotapModule, [])
  .component('zeotapApp', zeotapApp)
  .component('brandList', brandList)
  .component('brandlistHeader', brandlistHeader)
  .component('brandlistBody', brandlistBody)
  .factory('myDataService', myDataService)
  .factory('BrandService', BrandService)
  .filter('dateFilter', dateFilter);
  