import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  	save(question) {
  	   var params = {
        answer: this.get('answer') ? this.get('answer') : "Please update this!",
        author: this.get('author') ? this.get('author') : "Please update this!",
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
