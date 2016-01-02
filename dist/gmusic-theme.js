"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
      }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
        var n = t[o][1][e];return s(n ? n : e);
      }, l, l.exports, e, t, n, r);
    }return n[o].exports;
  }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
    s(r[o]);
  }return s;
})({ 1: [function (require, module, exports) {
    module.exports = {
      CLASS_NAMESPACE: 'gmusic-theme'
    };
  }, {}], 2: [function (require, module, exports) {

    // DEV: These constants will be transformed into string constants by browserify
    var BASE_CSS = ".gmusic-theme #material-app-bar,body.gmusic-theme{background-color:<<BACK_SECONDARY>>!important}.gmusic-theme #material-app-bar .tab-text,.gmusic-theme #nav,.gmusic-theme #searchIcon,.gmusic-theme .nav-item-container,.gmusic-theme .recommended-header,.gmusic-theme .situation-title,.gmusic-theme .title,.gmusic-theme [data-id=prev-history],.gmusic-theme [data-id=next-history]{color:<<FORE_PRIMARY>>!important}.gmusic-theme #material-one-left #left-nav-open-button svg{fill:<<FORE_PRIMARY>>!important}.gmusic-theme #loading-overlay,.gmusic-theme #loading-progress,.gmusic-theme #loading-progress-bar,.gmusic-theme #nav,.gmusic-theme #nav-container,.gmusic-theme .material-card .details,.gmusic-theme .material-card .image-wrapper,.gmusic-theme .nav-toolbar,.gmusic-theme .situations-filter{background:0 0!important}.gmusic-theme #loading-progress-bar{border:none!important}.gmusic-theme #player,.gmusic-theme #player.material .now-playing-actions paper-icon-button,.gmusic-theme .player-rating-container{color:<<FORE_PRIMARY>>!important;background-color:<<BACK_PRIMARY>>!important}.gmusic-theme #player.material:hover #material-player-progress #sliderContainer:not(.disabled) #sliderBar #progressContainer,.gmusic-theme .cluster-text-protection,.gmusic-theme .cluster-text-protection::before,.gmusic-theme .playlist-view .editable:hover{background:0 0!important}.gmusic-theme #nav_collections .nav-item-container:focus,.gmusic-theme .nav-item-container.selected,.gmusic-theme .nav-item-container:focus,.gmusic-theme .nav-item-container:hover{background-color:<<BACK_HIGHLIGHT>>!important}.gmusic-theme #nav_collections .nav-item-container:focus iron-icon,.gmusic-theme .nav-item-container:focus iron-icon,.gmusic-theme .nav-item-container:not(:focus):hover iron-icon{color:<<FORE_SECONDARY>>!important}.gmusic-theme .fade-out:after{display:none!important}.gmusic-theme .column.col-0 .material-card:first-child .image-wrapper{padding-top:0!important}.gmusic-theme .material .song-row .song-indicator{background-color:<<BACK_PRIMARY>>!important}.gmusic-theme .material .song-row:hover .song-indicator{background-color:<<BACK_HIGHLIGHT>>!important}.gmusic-theme .material-detail-view .has-hero-image,.gmusic-theme .song-row td,.gmusic-theme .song-row td>*,.gmusic-theme .song-row.selected-song-row td,.gmusic-theme .upload-progress-row td{background-color:<<BACK_PRIMARY>>!important;color:<<FORE_PRIMARY>>!important}.gmusic-theme .song-row.hover .content,.gmusic-theme .song-row.hover .song-indicator,.gmusic-theme .song-row.hover .song-indicator[data-playback-status=paused],.gmusic-theme .song-row.hover .song-indicator[data-playback-status=loading],.gmusic-theme .song-row.hover .title-right-items,.gmusic-theme .song-row.hover [data-col=index] .hover-button[data-id=play],.gmusic-theme .song-row.hover [data-col=track] .hover-button[data-id=play],.gmusic-theme .song-row.hover td,.gmusic-theme .song-row.hover td>*,.gmusic-theme .song-row.selected-song-row .content,.gmusic-theme .song-row.selected-song-row .song-indicator,.gmusic-theme .song-row.selected-song-row .song-indicator[data-playback-status=paused],.gmusic-theme .song-row.selected-song-row .song-indicator[data-playback-status=loading],.gmusic-theme .song-row.selected-song-row .title-right-items,.gmusic-theme .song-row.selected-song-row [data-col=index] .hover-button[data-id=play],.gmusic-theme .song-row.selected-song-row [data-col=track] .hover-button[data-id=play],.gmusic-theme .song-row.selected-song-row td,.gmusic-theme .song-row.selected-song-row td>*{background-color:<<BACK_HIGHLIGHT>>!important}.gmusic-theme .material-detail-view .material-container-details .info .description,.gmusic-theme .song-table th,body.gmusic-theme.material{color:#efefef!important}.gmusic-theme .song-row [data-col=index] .song-indicator{background-color:<<BACK_PRIMARY>>!important}.gmusic-theme .song-row.hover [data-col=index] .song-indicator,.gmusic-theme .song-row.selected-song-row [data-col=index] .song-indicator,.gmusic-theme .song-row.selected-song-row.hover [data-col=index] .hover-button[data-id=play]{background-color:<<BACK_HIGHLIGHT>>!important}.gmusic-theme .goog-menu,.gmusic-theme .goog-menuitem,.gmusic-theme .now-playing-menu .goog-menuitem,.gmusic-theme .now-playing-menu .goog-submenu,.gmusic-theme .now-playing-menu .goog-submenu .goog-submenu-arrow,.gmusic-theme .songlist-container{background-color:<<BACK_PRIMARY>>!important}.gmusic-theme .nav-section-divider{border-bottom:1px solid <<BACK_HIGHLIGHT>>!important}.gmusic-theme .goog-menu .goog-menuitem .goog-menuitem-content,.gmusic-theme .goog-menuitem-highlight .goog-menuitem-content,.gmusic-theme .goog-menuitem-highlight .goog-menuitem-content .goog-submenu-arrow{color:<<FORE_PRIMARY>>!important}.gmusic-theme .goog-menu .goog-menuitem.selected .goog-menuitem-content{color:<<FORE_SECONDARY>>!important}.gmusic-theme .goog-menuheader,.gmusic-theme .material-detail-view .artist-details .bio-wrapper .bio,.gmusic-theme .settings-card,.gmusic-theme .song-row.hover td a,.gmusic-theme .song-row.selected-song-row td a,.gmusic-theme .upload-dialog-description{color:<<FORE_PRIMARY>>!important}.gmusic-theme .goog-menu .goog-menuitem:hover,.gmusic-theme .goog-menu .goog-menuseparator{background-color:<<BACK_HIGHLIGHT>>!important}.gmusic-theme paper-action-dialog{background:0 0!important;color:<<FORE_PRIMARY>>!important}.gmusic-theme #queue-overlay,.gmusic-theme .settings-card{background-color:<<BACK_PRIMARY>>!important}.gmusic-theme #queue-overlay::after{border-color:transparent transparent <<BACK_PRIMARY>> <<BACK_PRIMARY>>!important}.gmusic-theme .upload-dialog-content{background-color:<<BACK_SECONDARY>>!important}.gmusic-theme .material .song-row:hover [data-col=index] .hover-button[data-id=play]{background-color:<<BACK_HIGHLIGHT>>!important}.gmusic-theme #current-loading-progress,.gmusic-theme .album-view .material-container-details .info .title .explicit,.gmusic-theme .material-container-details paper-fab,.gmusic-theme .paper-progress-0 #primaryProgress.paper-progress,.gmusic-theme .paper-progress-1 #primaryProgress.paper-progress,.gmusic-theme .paper-slider-0 #sliderKnobInner.paper-slider,.gmusic-theme .upload-dialog-title,.gmusic-theme paper-button.material-primary,.gmusic-theme paper-toggle-button[checked] .toggle-bar,.gmusic-theme paper-toggle-button[checked] .toggle-button{background-color:<<FORE_SECONDARY>>!important}.gmusic-theme .paper-input-container-0 .input-content.label-is-highlighted.paper-input-container .paper-input-label,.gmusic-theme .paper-input-container-0 .input-content.label-is-highlighted.paper-input-container label{color:<<FORE_SECONDARY>>!important}.gmusic-theme .material-share-options #sharing-option-label,.gmusic-theme .paper-input-container-0 .input-content.paper-input-container .paper-input-input,.gmusic-theme .paper-input-container-0 .input-content.paper-input-container input,.gmusic-theme .paper-input-container-0 .input-content.paper-input-container iron-autogrow-textarea,.gmusic-theme .paper-input-container-0 .input-content.paper-input-container textarea{color:<<FORE_PRIMARY>>!important}.gmusic-theme #player.material .material-player-middle paper-icon-button[data-id=play-pause]:not([disabled]),.gmusic-theme .paper-input-container-0 .add-on-content.is-highlighted.paper-input-container *,.gmusic-theme a.primary,.gmusic-theme paper-checkbox #ink{color:<<FORE_SECONDARY>>!important}.gmusic-theme #loading-overlay.material paper-spinner .circle{border-color:<<FORE_SECONDARY>>!important}.gmusic-theme paper-checkbox #checkbox.checked{border-color:<<FORE_SECONDARY>>!important;background-color:<<FORE_SECONDARY>>!important}.gmusic-theme paper-checkbox #checkboxLabel{color:<<FORE_PRIMARY>>!important}.gmusic-theme .nav-item-container.selected iron-icon,.gmusic-theme paper-toggle-button[checked] .toggle-ink{color:<<FORE_SECONDARY>>!important}.gmusic-theme .material .simple-dialog a,.gmusic-theme .material .song-table [data-col=title],.gmusic-theme .material .song-table.mini [data-col=song-details] .song-title,.gmusic-theme .material a,.gmusic-theme .share-buttons .share-button .button-label,.gmusic-theme paper-action-dialog paper-button,.gmusic-theme paper-dialog .buttons paper-button{color:<<FORE_PRIMARY>>!important}.gmusic-theme .material-detail-view .station-container-content-wrapper .material-container-details,.gmusic-theme .subcategories-list{background-color:<<BACK_PRIMARY>>!important}.gmusic-theme .material-list li a:focus,.gmusic-theme .material-list li a:hover{background-color:<<BACK_HIGHLIGHT>>!important}.gmusic-theme .paper-input-container-0 .focused-line.paper-input-container{background-color:<<FORE_SECONDARY>>!important}.gmusic-theme #player.material #material-player-right-wrapper paper-icon-button[data-id=queue].opened,.gmusic-theme #player.material .material-player-middle paper-icon-button[data-id=repeat][value=LIST_REPEAT],.gmusic-theme #player.material .material-player-middle paper-icon-button[data-id=repeat][value=SINGLE_REPEAT],.gmusic-theme #player.material .material-player-middle paper-icon-button[data-id=shuffle][value=ALL_SHUFFLE],.gmusic-theme .cluster .lane-button core-icon,.gmusic-theme .cluster .lane-button iron-icon,.gmusic-theme .material-detail-view .material-container-details .read-more-button{color:<<FORE_SECONDARY>>!important}.gmusic-theme .song-row:hover td,.gmusic-theme .song-row:hover td>*{background:0 0!important}.gmusic-theme .material .song-row:hover [data-col=track] .hover-button[data-id=play]{background-color:<<BACK_HIGHLIGHT>>!important}.gmusic-theme .rating-container li{-webkit-filter:invert(1)!important}.gmusic-theme .material-card .explicit,.gmusic-theme .song-row .explicit{background-color:<<FORE_SECONDARY>>!important}.gmusic-theme paper-dialog{background:0 0!important;color:<<FORE_PRIMARY>>!important}.gmusic-theme .simple-dialog{border-color:<<BACK_SECONDARY>>!important}.gmusic-theme .simple-dialog,.gmusic-theme .simple-dialog>div{background-color:<<BACK_PRIMARY>>!important;color:<<FORE_PRIMARY>>!important}.gmusic-theme .goog-buttonset-default{background-color:<<FORE_HIGHLIGHT>>!important}.gmusic-theme button.goog-buttonset-default,.gmusic-theme button.goog-buttonset-default:hover{background-color:<<FORE_SECONDARY>>!important}";
    var BASE_SVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 214 48\" id=\"normalSVGIcon\" class=\"menu-logo\">\r\n  <g fill=\"#757575\">\r\n    <path d=\"M12.3 20.5c0-5.4 4.6-9.8 10-9.8 3 0 5.1 1.2 6.7 2.7l-1.9 1.9c-1.2-1.1-2.7-1.9-4.8-1.9-4 0-7.1 3.2-7.1 7.2s3.1 7.2 7.1 7.2c2.6 0 4-1 5-2 .8-.8 1.3-1.9 1.5-3.4h-6.4v-2.7h9c.1.5.1 1.1.1 1.7 0 2-.6 4.5-2.3 6.3-1.7 1.8-3.9 2.8-6.9 2.8-5.5-.1-10-4.5-10-10zM38.8 17.7c-3.5 0-6.4 2.7-6.4 6.3 0 3.6 2.9 6.3 6.4 6.3 3.5 0 6.4-2.7 6.4-6.3-.1-3.6-2.9-6.3-6.4-6.3zm0 10.2c-1.9 0-3.6-1.6-3.6-3.8 0-2.3 1.7-3.8 3.6-3.8 1.9 0 3.6 1.6 3.6 3.8-.1 2.2-1.7 3.8-3.6 3.8zM52.6 17.7c-3.5 0-6.4 2.7-6.4 6.3 0 3.6 2.9 6.3 6.4 6.3 3.5 0 6.4-2.7 6.4-6.3 0-3.6-2.9-6.3-6.4-6.3zm0 10.2c-1.9 0-3.6-1.6-3.6-3.8 0-2.3 1.7-3.8 3.6-3.8s3.6 1.6 3.6 3.8c0 2.2-1.7 3.8-3.6 3.8zM69.7 18.1v1h-.1c-.6-.7-1.8-1.4-3.3-1.4-3.2 0-6.1 2.8-6.1 6.4 0 3.6 2.9 6.3 6.1 6.3 1.5 0 2.7-.7 3.3-1.4h.1v.9c0 2.4-1.3 3.7-3.4 3.7-1.7 0-2.8-1.2-3.2-2.3l-2.4 1c.7 1.7 2.5 3.7 5.6 3.7 3.3 0 6-1.9 6-6.6V18.1h-2.6zm-3.2 9.8c-1.9 0-3.5-1.6-3.5-3.8 0-2.2 1.6-3.9 3.5-3.9s3.4 1.6 3.4 3.9c-.1 2.2-1.5 3.8-3.4 3.8zM74.2 11.4H77V30h-2.8zM84.6 27.9c-1.4 0-2.4-.6-3.1-1.9l8.5-3.5-.3-.7c-.5-1.4-2.1-4-5.4-4-3.3 0-6 2.6-6 6.3 0 3.6 2.7 6.3 6.3 6.3 2.9 0 4.6-1.8 5.3-2.8l-2.2-1.4c-.7 1-1.7 1.7-3.1 1.7zm-.2-7.7c1.1 0 2 .6 2.4 1.3l-5.7 2.4c-.1-2.5 1.9-3.7 3.3-3.7z\"/></g><path fill=\"none\" d=\"M12.1 10.7h78v25.5h-78z\"/><path fill=\"none\" d=\"M12.1 10.7h189.8v25.5H12.1z\"/><g fill=\"#EE6B00\"><path d=\"M143.7 12.8h2.2l6 10.5h.1l6-10.5h2.2V30H158V19.8l.1-2.9h-.1l-5.4 9.4h-1.3l-5.4-9.4h-.1l.1 2.9V30h-2.2V12.8zM171.3 30v-1.6h-.1c-.6 1.1-2.1 2-3.7 2-3 0-4.5-2-4.5-4.9v-7.2h2.2v6.8c0 2.4 1.2 3.3 2.9 3.3 1.9 0 3.1-1.8 3.1-3.6v-6.5h2.2V30h-2.1zM174.9 27l2-.8c.6 1.5 1.8 2.2 3.2 2.2 1.4 0 2.4-.7 2.4-1.7 0-.6-.4-1.2-1.6-1.6l-2.4-.6c-1.1-.3-3.1-1.2-3.1-3.3 0-2.1 2.2-3.5 4.7-3.5 2 0 3.8.9 4.5 2.7l-1.9.8c-.5-1.1-1.5-1.6-2.7-1.6-1.2 0-2.3.6-2.3 1.5 0 .7.6 1.2 1.6 1.4l2.3.6c2.3.6 3.2 2 3.2 3.4 0 2.1-1.9 3.7-4.6 3.7-3 .2-4.6-1.5-5.3-3.2zM186 14.2c0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9-.1-1.6-.8-1.6-1.6zm.4 15.8V18.2h2.2V30h-2.2zM190.5 24.1c0-3.6 2.5-6.3 6-6.3 2.8 0 4.4 1.7 5.2 3.4l-2 .8c-.6-1.4-1.7-2.2-3.3-2.2-1.9 0-3.7 1.7-3.7 4.2s1.8 4.2 3.7 4.2c1.6 0 2.8-.8 3.4-2.2l2 .8c-.7 1.7-2.4 3.4-5.2 3.4-3.6.2-6.1-2.5-6.1-6.1z\"/></g><g fill=\"#757575\"><path d=\"M102.3 11.4h-6.7V30h2.8v-7.1h3.9c3.1 0 6.1-2.2 6.1-5.8s-3.1-5.7-6.1-5.7zm0 9h-4V14h4c2.1 0 3.3 1.7 3.3 3.2 0 1.4-1.2 3.2-3.3 3.2zM112.7 30V11.4h-2.8V30h2.8zM125.2 30v-7.1c0-3.3-2.5-5.2-5.7-5.2-2 0-4.1.9-5 2.9l2.5 1c.5-1 1.5-1.4 2.5-1.4 1.4 0 2.9.9 2.9 2.4v.2c-.5-.3-1.6-.7-2.9-.7-2.7 0-5.4 1.5-5.4 4.2 0 2.5 2.2 4.1 4.6 4.1 1.9 0 2.9-.8 3.5-1.8h.1V30h2.9zm-6-2.1c-.9 0-2.2-.5-2.2-1.6 0-1.4 1.6-2 2.9-2 1.2 0 1.8.3 2.5.6-.1 1.8-1.6 3-3.2 3zM134.9 18.1l-3.2 8.1h-.1l-3.3-8.1h-3l5 11.3-2.8 6.3h2.9l7.6-17.6h-3.1z\"/>\r\n  </g>\r\n  <path fill=\"none\" d=\"M.1 0h213.8v48H.1z\"/>\r\n</svg>\r\n";
    var CONSTANTS = require('../lib/_constants');

    window.GMusicTheme = (function () {
      /**
       * Constructor for a new Google Music Theme API.
       *
       * @param  {Object} - A colors object containing `backPrimary`, `backSecondary`,
       *                    `backHighlight`, `forePrimary`, `foreSecondary` attributes
       *                    any attribute not included will not be overriden
       */

      function GMusicTheme() {
        var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        _classCallCheck(this, GMusicTheme);

        // DEV: Use the colors specified in the options or the default if it isn't set
        this.BACK_PRIMARY = '#222326';
        this.BACK_SECONDARY = '#121314';
        this.BACK_HIGHLIGHT = '#615F59';
        this.FORE_PRIMARY = '#FFFFFF';
        this.FORE_SECONDARY = '#1ED760';

        this.enabled = false;
        if (options.enabled) {
          this.enable();
        }

        // DEV: This is the style element where we put our custom CSS
        this.styleElement = document.createElement('style');
        document.body.appendChild(this.styleElement);

        // DEV: updateColors calls redrawTheme
        this.updateColors(options);
      }

      /**
       * Regenerates the custom CSS and and updates the SVG logo
       */

      _createClass(GMusicTheme, [{
        key: "redrawTheme",
        value: function redrawTheme() {
          this._refreshStyleSheet();
          this._drawLogo();
        }

        /**
         * Enables the custom theme
         */

      }, {
        key: "enable",
        value: function enable() {
          document.body.classList.add(CONSTANTS.CLASS_NAMESPACE);
          this.enabled = true;
          this._drawLogo();
        }

        /**
         * Disables the custom theme
         */

      }, {
        key: "disable",
        value: function disable() {
          document.body.classList.remove(CONSTANTS.CLASS_NAMESPACE);
          this.enabled = false;
          this._drawLogo();
        }

        /**
         * Updates the custom colors used in the theme and redraws the custom CSS
         *
         * @param  {Object} - A colors object containing `backPrimary`, `backSecondary`,
         *                    `backHighlight`, `forePrimary`, `foreSecondary` attributes
         *                    any attribute not included will not be overriden
         */

      }, {
        key: "updateTheme",
        value: function updateTheme(colorObject) {
          this.BACK_PRIMARY = colorObject.backPrimary || this.BACK_PRIMARY;
          this.BACK_SECONDARY = colorObject.backSecondary || this.BACK_SECONDARY;
          this.BACK_HIGHLIGHT = colorObject.backHighlight || this.BACK_HIGHLIGHT;
          this.FORE_PRIMARY = colorObject.forePrimary || this.FORE_PRIMARY;
          this.FORE_SECONDARY = colorObject.foreSecondary || this.FORE_SECONDARY;
          this.redrawTheme();
        }
      }, {
        key: "_drawLogo",
        value: function _drawLogo() {
          var logo = document.querySelectorAll('.menu-logo')[0];
          var normalSVG = BASE_SVG;
          var customSVG = normalSVG.replace('#EE6B00', this.FORE_SECONDARY).replace('id="normalSVGIcon"', 'id="customSVGIcon"');
          var parent = undefined;
          var tmpSVG = undefined;

          if (logo) {
            parent = logo.parentNode;
            if (this.enabled) {
              // DEV: Only update the SVG element if we need to
              if (logo.nodeName === 'IMG' || logo.id === 'normalSVGIcon' || logo.getAttribute('current-custom') !== this.FORE_SECONDARY) {
                parent.removeChild(logo);
                tmpSVG = new DOMParser().parseFromString(customSVG, 'text/xml').firstChild;
                tmpSVG.setAttribute('current-custom', this.FORE_SECONDARY);
                parent.appendChild(tmpSVG);
              }
            } else {
              // DEV: Only update the SVG element if we need to
              if (logo.nodeName === 'IMG' || logo.id === 'customSVGIcon') {
                parent.removeChild(logo);
                parent.appendChild(new DOMParser().parseFromString(normalSVG, 'text/xml').firstChild);
              }
            }
          } else {
            // DEV: If the logo isn't ready yet wait a few milliseconds and try again
            setTimeout(this._drawLogo, 10);
          }
        }
      }, {
        key: "_refreshStyleSheet",
        value: function _refreshStyleSheet() {
          // DEV: Take the current style string and put it in the style element in the DOM
          this.styleElement.innerHTML = this._substituteColors(BASE_CSS);
        }
      }, {
        key: "_substituteColors",
        value: function _substituteColors(styleString) {
          return styleString.replace(/<<BACK_PRIMARY>>/g, this.BACK_PRIMARY).replace(/<<BACK_SECONDARY>>/g, this.BACK_SECONDARY).replace(/<<BACK_HIGHLIGHT>>/g, this.BACK_HIGHLIGHT).replace(/<<FORE_PRIMARY>>/g, this.FORE_PRIMARY).replace(/<<FORE_SECONDARY>>/g, this.FORE_SECONDARY);
        }
      }]);

      return GMusicTheme;
    })();
  }, { "../lib/_constants": 1 }] }, {}, [2]);
//# sourceMappingURL=gmusic-theme.js.map
