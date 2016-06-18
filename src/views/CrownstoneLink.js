import {View} from 'backbone';
import CrownstoneRouter from '../routers/CrownstoneRouter';

const CrownstoneLink = View.extend
({
    router: null,

    events:
    {
        'click a' : 'clickHandler'
    },

    initialize: function()
    {
        this.router = new CrownstoneRouter();
    },

    clickHandler: function(e)
    {
        let t = e.currentTarget;

        let url = "crownstones/" + t.dataset['id'];
        this.router.navigate(url, {trigger: true, replace: true});
        console.log(url);
    }
});

export default CrownstoneLink