import {View} from 'backbone';
import NetworkRouter from '../routers/NetworkRouter';

const NetworkLink = View.extend
({
    router: null,

    events:
    {
        'click a' : 'clickHandler'
    },

    initialize: function()
    {
        this.router = new NetworkRouter();
    },

    clickHandler: function(e)
    {
        let t = e.currentTarget;

        let url = "networks/" + t.dataset['id'];
        this.router.navigate(url, {trigger: true, replace: true});
        console.log(url);
    }
});

export default NetworkLink