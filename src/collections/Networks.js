import {Collection} from 'backbone';
import Network from '../models/Network';

/**
 * Collection for the matches endpoint
 *
 * @constructor
 */
const Networks = Collection.extend({
    model: Network,
    url: 'http://timfalken.com/hr/smarthome/networks/'
});

export default Networks;