import {Router} from 'backbone';

const CrownstoneRouter = Router.extend({
    routes:
    {
        'crownstones/:id': 'crownstoneAction'
    },

    crownstoneAction: function(id)
    {
        App.events.trigger('loadCrownstone', {id:id});
    }
});

export default CrownstoneRouter;