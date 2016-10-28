import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
  	deleteQuestion(qusetion) {
      if(confirm("Are you sure you want to delete this qusetion?")) {
        var answer_deletions = qusetion.get('answers').map(function(answer) {
          return answer.destroyRecord();
        });
        Ember.RSVP.all(answer_deletions).then(function() {
          return qusetion.destroyRecord();
        });
      }
    }
  } 
});
