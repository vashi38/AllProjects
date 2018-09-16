// @ts-check
const Campaign = require('./Campaigns');

class Brand {
    constructor(obj) {
        Brand.TOTAL++ ;
        this.number = Brand.TOTAL;
        // @ts-ignore
        this.campaigns = Object.values(obj.campaigns).map(function(campaign) {
            return new Campaign(campaign);
        });
        this.budget = obj.budget;
        this.spend = obj.spend;
        this.id = obj.id;
        this.brand_name = obj.name;
        this.advertiser_name = obj.advertiserName;
    }
}
Brand.TOTAL = -1;
module.exports = Brand;
  