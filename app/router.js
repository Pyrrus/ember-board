import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('add');
  this.route('questions');
  this.route('edit', {path: '/edit/:question_id'});
  this.route('view', {path: '/view/:question_id'});
  this.route('favorites');
});

export default Router;
