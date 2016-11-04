import Ember from 'ember';

export function voteColor(params) {
  if (params >= 10) {
  	return "<h2 class='great'>Answer</h2>";
  } else if (params >= 1) {
  	return "<h2 class='good'>Answer</h2>";
  } else if (params == 0) {
  	return "<h2>Answer</h2>";
  } else if (params >= -9) {
  	return "<h2 class='bad'>Answer</h2>";
  } else if (params <= -10) {
  	return "<h2 class='awful'>Answer</h2>";
  }
}

export default Ember.Helper.helper(voteColor);
