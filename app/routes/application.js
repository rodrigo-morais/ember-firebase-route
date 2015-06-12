import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        sayHello: function(date){
            alert('say hello Application Route - Date - ' + date);
        }
    }
});