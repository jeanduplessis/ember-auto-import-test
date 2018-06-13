import Route from '@ember/routing/route';
import UAParser from 'ua-parser-js';

export default Route.extend({
    setupController() {
        console.log('setup');
        console.log(UAParser);
    }
});
