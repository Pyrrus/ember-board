import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        question: this.get('question') ? this.get('question') : "Please update this!",
        author: this.get('author') ? this.get('author') : "Please update this!",
        moreinfo: this.get('moreinfo') ? this.get('moreinfo') : "Please update this!",
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
