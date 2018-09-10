// @ts-check
class Image {
    constructor(photo) {
        this.username = photo.photo_info.owner.realname ? photo.photo_info.owner.realname : '<No Name>';
        this.date = new Date(photo.photo_info.dates.taken);
        this.ownerImg = "https://s.yimg.com/pw/images/buddyicon11_m.png#"+ photo.owner;
        this.bigImageUrl = "http://farm" + photo.farm + ".staticflickr.com/" 
                            + photo.server + "/" + photo.id + "_" + photo.secret + "_b.jpg";
        this.smallImageUrl = "http://farm" + photo.farm + ".staticflickr.com/" 
                            + photo.server + "/" + photo.id + "_" + photo.secret + "_s.jpg";
        this.showBigImg = false;
    }

    downloadBigImg() {
        console.log('downloading image');
        var self = this;
        var ele;
        ele = document.createElement('img');
        ele.src = self.bigImageUrl;
        ele.onload = function() {
            self.showBigImg = true;
        };
        console.log(this);
    }
}

module.exports = Image; 