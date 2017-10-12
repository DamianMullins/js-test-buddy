import * as domUtils from 'dom-buddy';
import {
    click
} from '../src/simulate';

describe('click()', () => {

    it('does not throw when element is `null`', () => {
        // Arrange
        const element = null;

        // Act & Assert
        expect(() => click(element)).not.toThrow();
    });

    it('does not throw when element is `undefined`', () => {
        // Arrange
        const element = undefined;

        // Act & Assert
        expect(() => click(element)).not.toThrow();
    });

    it('does not throw when element is empty string', () => {
        // Arrange
        const element = '';

        // Act & Assert
        expect(() => click(element)).not.toThrow();
    });

    it('does not throw when element does not exist', () => {
        // Arrange
        const element = document.querySelector('button');

        // Act & Assert
        expect(() => click(element)).not.toThrow();
    });

    it('fires click event when element exists', () => {
        // Arrange
        domUtils.setBodyHtml('<button></button>');
        const element = document.querySelector('button');
        const cssClass = 'clicked';
        element.addEventListener('click', () => element.classList.add(cssClass));

        // Act
        click(element);

        // Assert
        expect(element.classList.contains(cssClass)).toBe(true);
    });

});
