import {
    dispatchEvent,
    setHtml,
    getHtml
} from 'dom-buddy';


/**
 * Triggers a click event.
 *
 * @param {Node} element
 */
const click = element => dispatchEvent(element, 'click');


export default {
    click,
    setHtml,
    getHtml
};
