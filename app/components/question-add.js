import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        moreinfo: this.get('moreinfo'),
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
