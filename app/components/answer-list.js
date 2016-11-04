import Ember from 'ember';

export default Ember.Component.extend({
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
		}
	}
});
