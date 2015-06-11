import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('spending');
    this.route('spent', { path: '/spendings/:spent_id'});
});

export default Router;
