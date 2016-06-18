import {Collection} from 'backbone';
import User from '../models/User';

/**
 * Collection for the matches endpoint
 *
 * @constructor
 */
const Users = Collection.extend({
    model: User,
    url: 'http://timfalken.com/hr/smarthome/users/'
});

export default Users;