import Ember from 'ember';

export default Ember.Service.extend({
  questions: [],
  size: 0,
  add(question) {
  	var holder = this.get('size');
    holder++;
    this.set('size', holder);
    this.get('questions').pushObject(question);
  },
  remove(question) {
    var index = this.get('questions').indexOf(question);
    this.get('questions').splice(index, 1);
    var holder = this.get('size');
    holder--;
    this.set('size', holder);
  }
});
