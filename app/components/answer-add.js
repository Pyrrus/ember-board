import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  	save(question) {
  	   var params = {
        answer: this.get('answer'),
        author: this.get('author'),
        like: 0,
        question: question
      };
      this.sendAction('save', params);
  	}
  },
  beforeModel: function(){
    this._super(...arguments);
    if (typeof tinymce === 'undefined'){
      return Ember.$.getScript('//cdn.tinymce.com/4/tinymce.min.js');
    }
  }
});
