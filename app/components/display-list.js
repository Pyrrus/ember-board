import Ember from 'ember';

export default Ember.Component.extend({
  questionsList: Ember.inject.service(),
  actions: {
  	 remove(question) {
      this.get('questionsList').remove(question);
      this.set('questionsList', null);
      this.set('questionsList', Ember.inject.service());
    }
  }
});
