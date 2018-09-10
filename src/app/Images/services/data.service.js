/** @ngInject */
function imageDataService($http, $log) {
    const URL = 'https://api.flickr.com/services/rest';
    function _getImageList(pageNo = 1, howMany = 10) {
        // console.log('page no: ' + pageNo + 'How Many: ' + howMany);
        return $http({
            method: 'GET',
            url: URL,
            params:{
				method:'flickr.photos.getRecent',
				per_page:10,
				page:1,
				api_key:'f0bba32a935beb03d38da44ad48f2625',
				format:'json',
				nojsoncallback: 1
			}
        }).then(function (response) {
            return response.data;
        }).then(function (data) {
            // console.log(data.photos.photo);
            // return data.photos.photo;
            return Object.values(data.photos.photo).map(function(item) {
                return _getImageInfo(item.id).then(function(response) {
                    angular.extend(item, {
                        photo_info: response
                    });
                    return item;
                })
                // return item;
            });
        }).then(function(fullData) {
            // console.log(fullData);
            return fullData;
        });
    }
    function _getImageInfo(photoId){
		return $http({
			method:'GET',
			url: URL,
			params:{
				method:'flickr.photos.getInfo',
				api_key:'f0bba32a935beb03d38da44ad48f2625',
				format:'json',
				photo_id:photoId,
				nojsoncallback: 1
			}
		}).then(function(response){
			// console.log(response.data);
			return response.data.photo;

		});
	}
    return {
        getImageList: _getImageList,
        getImageInfo: _getImageInfo
    };
};

module.exports = imageDataService;