import {Collection} from 'backbone';
import CrownStone from '../models/Crownstone';

/**
 * Collection for the matches endpoint
 *
 * @constructor
 */
const CrownStones = Collection.extend({
    model: CrownStone,
    url: 'http://timfalken.com/hr/smarthome/crownstones'
});

export default CrownStones;
