import Ember from 'ember';

export default Ember.View.extend({
    templateName: 'spenderview',
    name: '',
    item: (function(){
        return 'view - ' + this.get('name');
    }).property('name')
});