import Ember from 'ember';

export default Ember.ObjectController.extend({
  class: 'hide',
  actions: {
    alert: function(){
        if(this.get('class') === 'hide'){
            this.set('class', 'show');
        }
        else{
            this.set('class', 'hide');
        }
    }  
  }
});