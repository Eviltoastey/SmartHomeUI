import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';


const NetworksView = View.extend
({
	initialize : function()
	{
		App.events.on('loadNetwork', this.loadNetworks, this);
	},

	loadNetworks: function(user)
	{
		console.log(user);

		this.collection.fetch
		({
				success:(collection) => {this.networksLoaded(collection)},
		error: (collection, response) => {this.loadError(collection, repsonse)},
		data: {
			id: user.id
		}
	});
	},

	networksLoaded: function(collection)
	{
		_.templateSettings.variable = "rc";

		let template = _.template($( "script#template-networks" ).html());
		$( "#InfoBlock" ).html(template( collection ));
	},

	loadError: function(collection, error)
	{
		console.log(error);
	}
});

export default NetworksView;