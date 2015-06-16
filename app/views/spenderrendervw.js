import Ember from 'ember';

export default Ember.View.extend({
    templateName: 'spenderrendervw',
    item: (function(){
        return 'view - ' + this.get('controller').get('item');
    }).property('item')
});