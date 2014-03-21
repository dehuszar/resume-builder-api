/**
 * Workhistory
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
	title: 			{
		type: 		'string',
		required: 	true
	},
	location: 	{
		type: 		'string',
		required: 	true
	},
	employedFrom: 	{
		type: 		'string',
		required: 	true
	},
	employedTo: 	{
		type: 		'string',
		required: 	true
	},
	position: 	{
		type: 		'string',
		required: 	true
	},
	description: 	{
		type: 		'string',
		required: 	true
	}
  }

};
