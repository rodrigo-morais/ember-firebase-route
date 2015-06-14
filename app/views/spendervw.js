import Ember from 'ember';

export default Ember.View.extend({
    templateName: 'spenderview',
    item: (function(){
        return 'view 2 - ' + this.get('content').get('item');
    }).property('item')
});