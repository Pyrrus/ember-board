import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  moreinfo: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});