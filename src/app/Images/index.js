import angular from 'angular';
import ngLoad from 'ng-load';

import imageComponent from './views/imageComponent/image.component';
import imagelistComponent from './views/imageList/imageList.component';
import showImages from './views/showImagesApp/showImages';
import imageDataService from './services/data.service';
import imageApplService from './services/application.service';

export const imageModule = 'images';
import './views/imageComponent/image.component.scss';
import './views/imageList/imageList.scss';

angular
  .module(imageModule, ['ngLoad'])
  .component('imageComponent', imageComponent)
  .component('imagelistComponent', imagelistComponent)
  .component('showImages', showImages)
  .factory('imageDataService', imageDataService)
  .factory('imageApplService', imageApplService);
  