import Ember from 'ember';

export default Ember.View.extend({
    templateName: 'spenderview',
    name: '',
    attributeBidings: ['item'],
    item: (function(){
        return 'view - ' + this.get('name');
    }).property('item')
});