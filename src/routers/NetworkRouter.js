import {Router} from 'backbone';

const NetworkRouter = Router.extend({
	routes:
	{
		'networks/:id': 'networkAction'
	},

	networkAction: function(id)
	{
		App.events.trigger('loadNetwork', {id:id});
	}
});

export default NetworkRouter;