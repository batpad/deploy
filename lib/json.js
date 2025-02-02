import friend from '@mapbox/cloudfriend';
import tagger from './tagger.js';

/**
 * @class
 */
export default class Json {
    /**
     * Print help documentation to the screen
     */
    static help() {
        console.log();
        console.log('Return the JSONified Cloudformation Template');
        console.log();
        console.log('Usage: deploy json [--help]');
        console.log();
        console.log('Options:');
        console.log('  --help           show this help message');
        console.log();
    }

    /**
     * Output a JSONified version of the cloudformation template
     *
     * @param {Credentials} creds Credentials
     */
    static main(creds) {
        friend.build(creds.template).then((template) => {
            template = tagger(template, creds.tags);

            console.log(JSON.stringify(template));
        });
    }
}
