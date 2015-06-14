import Ember from 'ember';

export default Ember.Controller.extend({
  class: 'hide',
  actions: {
    alert: function(){
        if(this.get('class') === 'hide'){
            this.set('class', 'show');
        }
        else{
            this.set('class', 'hide');
        }
    },
    sayHello: function(date){
        alert('say hello Controller - Date - ' + date);
        return true;
    }
  }
});