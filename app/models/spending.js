import DS from "ember-data";

export default DS.Model.extend({
  date: DS.attr('string'),
  item: DS.attr('string'),
  value: DS.attr('string'),
  month: function(){
    var _month = this.get('date').split('/')[1];
    return new Date(1,_month,1).toLocaleString('en',{month:"long"});
  }.property('date'),
  daysBehind: function(){
    var now = Date.now();
    var date = new Date(this.get('date').split('/')[2], this.get('date').split('/')[1] - 1,this.get('date').split('/')[0]);
    
    return parseInt((now - date)/(1000*60*60*24));
  }.property('date'),
  actualMonth: function(){
    var now = new Date();
    var date = new Date(this.get('date').split('/')[2], this.get('date').split('/')[1] - 1,this.get('date').split('/')[0]);

    return now.getMonth() === date.getMonth();
  }.property('date')
});