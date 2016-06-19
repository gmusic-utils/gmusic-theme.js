const color = require('color');
const fs = require('fs');

// DEV: These constants will be transformed into string constants by browserify
const COMMON_CSS = fs.readFileSync(__dirname + '/../build/common.css', 'utf8');
const HIGHLIGHT_CSS = fs.readFileSync(__dirname + '/../build/highlight.css', 'utf8');
const FULL_CSS = fs.readFileSync(__dirname + '/../build/full.css', 'utf8');
const BASE_SVG = fs.readFileSync(__dirname + '/../lib/logo.svg', 'utf8');
const CONSTANTS = require('../lib/_constants');

const DEFAULTS = {
  BACK_PRIMARY: '#222326',
  BACK_SECONDARY: '#121314',
  BACK_HIGHLIGHT: '#615F59',
  FORE_PRIMARY: '#FFFFFF',
  FORE_SECONDARY: '#FF5722',
};

class GMusicTheme {
  static TYPES = {
    FULL: 'FULL',
    HIGHLIGHT_ONLY: 'HIGHLIGHT_ONLY',
  };

  /**
   * Constructor for a new Google Music Theme API.
   *
   * @param  {Object} - A colors object containing `backPrimary`, `backSecondary`,
   *                    `backHighlight`, `forePrimary`, `foreSecondary` attributes
   *                    any attribute not included will not be overriden
   */
  constructor(options = {}) {
    // DEV: Use the colors specified in the options or the default if it isn't set
    this.BACK_PRIMARY = DEFAULTS.BACK_PRIMARY;
    this.BACK_SECONDARY = DEFAULTS.BACK_SECONDARY;
    this.BACK_HIGHLIGHT = DEFAULTS.BACK_HIGHLIGHT;
    this.FORE_PRIMARY = DEFAULTS.FORE_PRIMARY;
    this.FORE_SECONDARY = DEFAULTS.FORE_SECONDARY;
    this.enabled = options.enabled || false;
    this.type = GMusicTheme.TYPES.FULL;

    // DEV: This is the style element where we put our custom CSS
    this.styleElement = document.createElement('style');
    document.body.appendChild(this.styleElement);

    // DEV: updateTheme calls redrawTheme
    this.updateTheme(options);
  }

  /**
   * Regenerates the custom CSS and and updates the SVG logo
   */
  redrawTheme() {
    this._refreshStyleSheet();
    this._drawLogo();

    // DEV: Add / Remove appropriate classes
    if (this.enabled) {
      document.documentElement.classList.add(CONSTANTS.CLASS_NAMESPACE);
    } else {
      document.documentElement.classList.remove(CONSTANTS.CLASS_NAMESPACE);
    }
  }

  /**
  * Enabled the custom theme
  */
  enable() {
    this.enabled = true;
    this.redrawTheme();
  }

  /**
   * Disables the custom theme
   */
  disable() {
    this.enabled = false;
    this.redrawTheme();
  }

  /**
   * Updates the custom colors used in the theme and redraws the custom CSS
   *
   * @param  {Object} - A colors object containing `backPrimary`, `backSecondary`,
   *                    `backHighlight`, `forePrimary`, `foreSecondary` attributes
   *                    any attribute not included will not be overriden
   */
  updateTheme(colorObject) {
    // DEV: Validate the updateTheme type
    if (colorObject.type !== undefined && GMusicTheme.TYPES[colorObject.type] === undefined) {
      const validTypesStr = JSON.stringify(Object.keys(GMusicTheme.TYPES));
      throw new Error(`\`updateTheme\` expected \`colorObject.type\` to be in ${validTypesStr}
        but it was "${colorObject.type}"`);
    }
    this.BACK_PRIMARY = colorObject.backPrimary || this.BACK_PRIMARY;
    this.BACK_SECONDARY = colorObject.backSecondary || this.BACK_SECONDARY;
    this.BACK_HIGHLIGHT = colorObject.backHighlight || this.BACK_HIGHLIGHT;
    this.FORE_PRIMARY = colorObject.forePrimary || this.FORE_PRIMARY;
    this.FORE_SECONDARY = colorObject.foreSecondary || this.FORE_SECONDARY;
    this.type = colorObject.type || this.type;
    this.redrawTheme();
  }

  _drawLogo() {
    const logo = document.querySelectorAll('.menu-logo')[0];
    const normalSVG = BASE_SVG;
    const customSVG = normalSVG.replace('#EE6B00', this.FORE_SECONDARY).replace('id="normalSVGIcon"', 'id="customSVGIcon"');
    let parent;
    let tmpSVG;

    if (logo) {
      parent = logo.parentNode;
      if (this.logoObserver) {
        this.logoObserver.disconnect();
        delete this.logoObserver;
      }

      if (this.enabled) {
        // DEV: Only update the SVG element if we need to
        if (logo.nodeName === 'IMG' || logo.id === 'normalSVGIcon' || logo.getAttribute('current-custom') !== this.FORE_SECONDARY) {
          parent.removeChild(logo);
          tmpSVG = (new DOMParser()).parseFromString(customSVG, 'text/xml').firstChild;
          tmpSVG.setAttribute('current-custom', this.FORE_SECONDARY);
          parent.appendChild(tmpSVG);
        }
      } else {
        // DEV: Only update the SVG element if we need to
        if (logo.nodeName === 'IMG' || logo.id === 'customSVGIcon') {
          parent.removeChild(logo);
          parent.appendChild((new DOMParser()).parseFromString(normalSVG, 'text/xml').firstChild);
        }
      }

      // DEV: Google sometimes changes its logo by itself, we need to monitor this
      this.logoObserver = new MutationObserver(() => {
        this._drawLogo();
      });
      this.logoObserver.observe(parent, {
        childList: true,
        attributes: true,
        subtree: true,
      });
    } else {
      // DEV: If the logo isn't ready yet wait a few milliseconds and try again
      setTimeout(this._drawLogo, 10);
    }
  }

  _refreshStyleSheet() {
    // DEV: Take the current style string and put it in the style element in the DOM)
    let styles = COMMON_CSS;
    switch (this.type) {
      case GMusicTheme.TYPES.FULL:
        styles += FULL_CSS;
        break;
      case GMusicTheme.TYPES.HIGHLIGHT_ONLY:
        styles += HIGHLIGHT_CSS;
        break;
      default:
        break;
    }
    this.styleElement.innerHTML = this._substituteColors(styles);
  }

  _rgba(colorCode, opacity) {
    return color(colorCode).clearer(opacity).rgbString();
  }

  _darken(colorCode, percentage) {
    return color(colorCode).darken(percentage).rgbString();
  }

  _inverse(colorCode) {
    const rgb = color(colorCode).rgb();
    return color({
      r: 255 - rgb.r,
      g: 255 - rgb.g,
      b: 255 - rgb.b,
    }).rgbString();
  }

  _substituteColors(styleString) {
    return styleString
      .replace(/<<BACK_PRIMARY>>/g, this.BACK_PRIMARY)
      .replace(/<<BACK_SECONDARY>>/g, this.BACK_SECONDARY)
      .replace(/<<BACK_HIGHLIGHT>>/g, this.BACK_HIGHLIGHT)
      .replace(/<<FORE_PRIMARY>>/g, this.FORE_PRIMARY)
      .replace(/<<FORE_PRIMARY_MUTED>>/g, this._darken(this.FORE_PRIMARY, 0.4))
      .replace(/<<FORE_SECONDARY>>/g, this.FORE_SECONDARY)
      .replace(/<<BACK_SECONDARY_O>>/g, this._rgba(this.BACK_SECONDARY, 0.5))
      .replace(/<<INVERSE>>(.+?)<<\/INVERSE>>/g, (s, colorString) => this._inverse(colorString))
      .replace(/<<NOTIMPORTANT>> \!important/g, '');
  }
}

window.GMusicTheme = GMusicTheme;
