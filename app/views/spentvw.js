import Ember from 'ember';

export default Ember.View.extend({
    templateName: 'spentview',
    item: (function(){
        return 'view - ' + this.get('controller.model').get('item');
    }).property('controller.model.item')
});