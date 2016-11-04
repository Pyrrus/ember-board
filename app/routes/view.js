import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
  	save(params) {
      var output = "";
      if (params.author === undefined) {
        output += "Please add an author\n";
      }

      if (params.answer === undefined) {
        output += "Please add an answer\n";
      }
      if (output === '') {
    	  var newAnswer = this.store.createRecord('answer', params);
        var question = params.question;
        question.get('answers').addObject(newAnswer);
        newAnswer.save().then(function() {
          return question.save();
        });
      } else {
        window.alert(output);
      }
  	},
    updateLike(params, answer) {
        Object.keys(params).forEach(function(key) {
          if(params[key]!==undefined) {
            answer.set(key,params[key]);
          }
        });
        answer.save();
    }
  }
});
