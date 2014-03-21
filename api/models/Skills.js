/**
 * Skill
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
	description: 	{
		type: 		'string',
		required: 	true
	},
	category: 		{
		type: 		'string',
		required: 	true
	} 
  }

};
