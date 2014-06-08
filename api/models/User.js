/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
  	
  	/* e.g.
  	nickname: 'string'
  	*/
  	firstName: {
  		type: 'string',
  		maxLength: 20,
  		minLength: 3
  	},
  	lastName: {
  		type: 'string',
  		maxLength: 20,
  		minLength: 3
  	},
  	emailAddress: {
  		type: 'email',
  		required: true
  	}
  }
};
