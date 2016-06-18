import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';


const CrownstoneView = View.extend
({
	initialize : function()
	{
		App.events.on('loadCrownstone', this.loadCrownstone, this);
	},

	loadCrownstone: function(user)
	{
		console.log(user);

		this.collection.fetch
		({
				success:(collection) => {this.CrownstonesLoaded(collection)},
		error: (collection, response) => {this.loadError(collection, repsonse)},
		data: {
			id: user.id
		}
	});
	},

	CrownstonesLoaded: function(collection)
	{
		_.templateSettings.variable = "rc";

		let template = _.template($( "script#template-crownstones" ).html());
		$( "#InfoBlock" ).html(template( collection ));
	},

	loadError: function(collection, error)
	{
		console.log(error);
	}
});

export default CrownstoneView;