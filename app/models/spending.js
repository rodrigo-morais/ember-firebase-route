import DS from "ember-data";

export default DS.Model.extend({
  date: DS.attr('string'),
  item: DS.attr('string'),
  value: DS.attr('string'),
  month: function(){
    var _month = this.get('date').split('/')[1];
    return new Date(1,_month,1).toLocaleString('en',{month:"long"});
  }.property('date')
});