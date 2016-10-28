import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  	save(params) {
  	  var output = "";
      if (params.question === undefined) {
        output += "Please add a question\n";
      }

      if (params.author === undefined) {
        output += "Please add an author\n";
      }

      if (params.moreinfo === undefined) {
        output += "Please add a info for the question\n";
      }
      if (output === '') {
      	var newQuestion = this.store.createRecord('question', params);
        newQuestion.save();
      } else {
      	window.alert(output);
      }
    }
  }
});
