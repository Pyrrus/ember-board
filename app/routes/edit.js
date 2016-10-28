import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    update(question) {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        content: this.get('content'),
      };

      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          question.set(key,params[key]);
        }
      });
      question.save();
      this.transitionTo('/view/' + question.id);
    }
  },
  beforeModel: function(){
    this._super(...arguments);
    if (typeof tinymce === 'undefined'){
      return Ember.$.getScript('//cdn.tinymce.com/4/tinymce.min.js');
    }
  }
});
