import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        sayHello: function(){
            alert('say hello Application Route');
        }
    }
});