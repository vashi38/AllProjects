// @ts-check
class TableData {
    constructor(obj) {
        this.brand_name = obj.brand_name;
        this.advertiser_name = obj.advertiser_name;
        this.campaigns = obj.campaigns;
        
    }
    getCampaignCount() {
        return this.campaigns.length;
    }
    getFirstCampaignName() {
        let list = this.campaigns.sort(function(a, b) {
            var x = a.campaign_name.toLowerCase();
            var y = b.campaign_name.toLowerCase();
            return x < y ? -1 : x > y ? 1 : 0;
        });
        return list.length === 0 ? "" : list[0].campaign_name;
    }
}
module.exports = TableData;
  