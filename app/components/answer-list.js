import Ember from 'ember';

export default Ember.Component.extend({
	sortBy: ['like:desc'],
  	sortLike: Ember.computed.sort('answers', 'sortBy'),
	actions: {
		addLike(likes, answer, type) {
			if (type === "up") {
			  likes++;
			} else {
			  likes--;
			}
			var params = {
		        like: likes,
		     };
			Object.keys(params).forEach(function(key) {
	          if(params[key]!==undefined) {
	            answer.set(key,params[key]);
	          }
	        });
	        answer.save();
		},
		high() {
			this.set('sortBy', ['like:desc']);
		},
		low() {
			this.set('sortBy', ['like']);
		}
	}
});
