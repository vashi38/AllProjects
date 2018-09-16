// @ts-check

class Campaign {
    constructor(obj) {
        this.CPM = obj.CPM;
        this.clicks = obj.clicks;
        this.CPC = obj.CPC;
        this.camppaign_budget = obj.budget;
        this.campaign_id = obj.id;
        this.start_date = obj.start_date;
        this.campaign_impression = obj.impression;
        this.campaign_spend = obj.spend;
        this.campaign_name = obj.name;
    }
    get_start_date() {
        var split_arr = this.start_date.split('-').reverse();

        return new Date(split_arr[0], parseInt(split_arr[1])-1, split_arr[2]);
    }
}
module.exports = Campaign;
  