import _ from 'underscore';
import {Events} from 'backbone';
import Networks from './collections/Networks';
import CrownStones from './collections/CrownStones';
import UsersView from './views/UsersView';
import UserLink from './views/UserLink';
import CrownstoneView from './views/CrownstonesView';
import CrownstoneLink from './views/CrownstoneLink';
import NetworkView from './views/NetworksView';
import NetworkLink from './views/NetworkLink';
import Users from './collections/Users';



(function ()
{
    let setGlobalVariables = function ()
    {
        window.App = {};
        App.events = _.clone(Events);
    };

    /**
     * Run after dom is ready
     */
    let init = function ()
    {
        setGlobalVariables();

        var networkList = new Networks();
        var userList = new Users();
        var crownstoneList = new CrownStones();

        new UsersView({el: "#users", collection: userList});
        new NetworkView({el: "#networks", collection: networkList});
        new CrownstoneView({el: "#crownstones", collection: crownstoneList});
        
        new NetworkLink({el: "#networkinfo"});
        new UserLink({el: "#userinfo"});
        new CrownstoneLink({el: "#crownstoneinfo"});

        Backbone.history.start({pushState: true, root: '/marco/smarthome/'}); //Change to your root URL
    };

    window.addEventListener('load', init);
})();
