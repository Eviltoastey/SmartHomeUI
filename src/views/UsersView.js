import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';


const UsersView = View.extend
({
    initialize : function()
    {
        App.events.on('loadUsers', this.loadUsers, this);
    },

    loadUsers: function(user)
    {
        console.log(user);

        this.collection.fetch
        ({
                success:(collection) => {this.usersLoaded(collection)},
        error: (collection, response) => {this.loadError(collection, repsonse)},
        data: {
            id: user.id
        }
    });
    },

    usersLoaded: function(collection)
    {
        _.templateSettings.variable = "rc";

        let template = _.template($( "script#template-users" ).html());
        $( "#InfoBlock" ).html(template( collection ));
    },

    loadError: function(collection, error)
    {
        console.log(error);
    }
});

export default UsersView;