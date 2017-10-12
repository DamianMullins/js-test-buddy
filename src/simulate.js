/* eslint-disable import/prefer-default-export */
/**
 * @overview Simulated event utilities.
 *
 * @module simulate
 */

import { dispatchEvent } from 'dom-buddy';


/**
 * Triggers a click event.
 *
 * @param {Node} element
 */
export const click = element => element && dispatchEvent(element, 'click');
