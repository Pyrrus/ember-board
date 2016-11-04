import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		addLike(likes, answer) {
			likes++;
			var params = {
		        like: likes,
		     };
			this.sendAction('updateLike', params, answer);
		},
		downLike(likes, answer) {
			likes--;
			var params = {
		        like: likes,
		     };
			this.sendAction('updateLike', params, answer);
		}
	}
});
