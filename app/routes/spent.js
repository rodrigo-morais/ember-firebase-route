import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        return this.store.find('spending', params.spent_id);
    },
    actions: {
        sayHello: function(){
            alert('say hello Route');
            return true;
        }
    }
});