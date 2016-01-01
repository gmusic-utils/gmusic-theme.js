window.GMusicTheme = class GMusicTheme {
  constructor() {
    this.BACK_PRIMARY = '#222326';
    this.BACK_SECONDARY = '#121314';
    this.BACK_HIGHLIGHT = '#615F59';
    this.FORE_PRIMARY = '#FFFFFF';
    this.FORE_SECONDARY = '#1ED760';

    this.events = {};

    if (localStorage.getItem('custom-theme') === null) {
      localStorage.setItem('custom-theme', 'false');
    }
    this.redrawTheme();
    this._initLogoWatcher();
  }

  redrawTheme() {
    const styleElement = document.getElementById('custom-theme-style');
    if (styleElement) {
      styleElement.remove();
    }
    this.STYLE_STRING = '';
    this._defaultStyles();
    this._flushStyles();
  }

  enable() {
    document.body.className = document.body.className + ' custom';
    localStorage.setItem('custom-theme', 'true');
    this._fire('enable');
  }

  disable() {
    document.body.className = document.body.className.toString().replace(/ ?custom/g, '');
    localStorage.setItem('custom-theme', 'false');
    this._fire('disable');
  }

  on(event, fn) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(fn);
  }

  /* Color Updating Methods */

  updateBackPrimary(color) {
    this.BACK_PRIMARY = color;
    this.redrawTheme();
  }

  updateBackSecondary(color) {
    this.BACK_SECONDARY = color;
    this.redrawTheme();
  }

  updateBackHighlight(color) {
    this.BACK_HIGHLIGHT = color;
    this.redrawTheme();
  }

  updateForePrimary(color) {
    this.FORE_PRIMARY = color;
    this.redrawTheme();
  }

  updateForeSecondary(color) {
    this.FORE_SECONDARY = color;
    this.redrawTheme();
  }

  /* Private Methods */

  _addStyle(selector, styles, importantToggle) {
    let string = 'body.custom ' + selector.replace(/, /g, ', body.custom ') + ' {';
    styles.forEach((style) => {
      string += this._substituteColors(style) + (importantToggle ? '' : ' !important;');
    });
    string += '}';
    this.STYLE_STRING += string;
  }

  _defaultStyles() {
    this._addStyle('#material-app-bar', ['background-color: {{BACK_SECONDARY}}']);
    this._addStyle('#material-app-bar .tab-text, [data-id="prev-history"], [data-id="next-history"], #searchIcon', ['color: {{FORE_PRIMARY}}']);
    this._addStyle('#material-one-left #left-nav-open-button svg', ['fill: {{FORE_PRIMARY}}']);
    this._addStyle('', ['background-color: {{BACK_SECONDARY}}']);
    this._addStyle('#nav-container, #loading-overlay, #loading-progress, #loading-progress-bar', ['background: {{BACK_PRIMARY}}']);
    this._addStyle('#loading-progress-bar', ['border: none']);
    this._addStyle('.nav-toolbar, .material-card .details, .material-card .image-wrapper, .situations-filter', ['background: {{BACK_PRIMARY}}']);
    this._addStyle('#nav', ['background: {{BACK_PRIMARY}}', 'color: {{FORE_PRIMARY}}']);
    this._addStyle('#player, .player-rating-container, #player.material .now-playing-actions paper-icon-button', ['color: {{FORE_PRIMARY}}', 'background-color: {{BACK_PRIMARY}}']);
    this._addStyle('#player.material:hover #material-player-progress #sliderContainer:not(.disabled) #sliderBar #progressContainer, .playlist-view .editable:hover', ['background: {{BACK_HIGHLIGHT}}']);
    this._addStyle('.cluster-text-protection::before, .cluster-text-protection', ['background: transparent']);
    this._addStyle('.title, .situation-title, .recommended-header', ['color: {{FORE_PRIMARY}}']);
    this._addStyle('.nav-item-container', ['color: {{FORE_PRIMARY}}']);
    this._addStyle('#nav_collections .nav-item-container:focus, .nav-item-container:focus, .nav-item-container:hover, .nav-item-container.selected', ['background-color: {{BACK_HIGHLIGHT}}']);
    this._addStyle('.nav-item-container:not(:focus):hover iron-icon', ['color: {{FORE_SECONDARY}}']);
    this._addStyle('#nav_collections .nav-item-container:focus iron-icon, .nav-item-container:focus iron-icon', ['color: {{FORE_SECONDARY}}']);
    this._addStyle('.fade-out:after', ['display: none']);
    this._addStyle('.column.col-0 .material-card:first-child .image-wrapper', ['padding-top: 0']);
    this._addStyle('.material .song-row .song-indicator', ['background-color: {{BACK_PRIMARY}}']);
    this._addStyle('.material .song-row:hover .song-indicator', ['background-color: {{BACK_HIGHLIGHT}}']);
    this._addStyle('.material-detail-view .has-hero-image, .song-row td, .song-row td > *, .upload-progress-row td, .song-row.selected-song-row td', ['background-color: {{BACK_PRIMARY}}', 'color: {{FORE_PRIMARY}}']);
    this._addStyle('.song-row.selected-song-row .song-indicator, .song-row.selected-song-row .title-right-items, .song-row.selected-song-row .content, .song-row.selected-song-row .song-indicator[data-playback-status="paused"], .song-row.selected-song-row .song-indicator[data-playback-status="loading"], .song-row.selected-song-row [data-col="index"] .hover-button[data-id="play"], .song-row.selected-song-row [data-col="track"] .hover-button[data-id="play"], .song-row.selected-song-row td, .song-row.selected-song-row td > *', ['background-color: {{BACK_HIGHLIGHT}}']);
    this._addStyle('.song-row.hover .song-indicator, .song-row.hover .title-right-items, .song-row.hover .content, .song-row.hover .song-indicator[data-playback-status="paused"], .song-row.hover .song-indicator[data-playback-status="loading"], .song-row.hover [data-col="index"] .hover-button[data-id="play"], .song-row.hover [data-col="track"] .hover-button[data-id="play"], .song-row.hover td, .song-row.hover td > *', ['background-color: {{BACK_HIGHLIGHT}}']);
    this._addStyle('body.material, .material-detail-view .material-container-details .info .description, .song-table th', ['color: #efefef']);
    this._addStyle('.song-row.hover [data-col="track"] .hover-button[data-id="play"]', ['background-color: {{BACK_HIGHLIGHT}}']);
    this._addStyle('.song-row [data-col="index"] .song-indicator', ['background-color: {{BACK_PRIMARY}}']);
    this._addStyle('.song-row.hover [data-col="index"] .song-indicator, .song-row.selected-song-row [data-col="index"] .song-indicator', ['background-color: {{BACK_HIGHLIGHT}}']);
    this._addStyle('.song-row.selected-song-row.hover [data-col="index"] .hover-button[data-id="play"]', ['background-color: {{BACK_HIGHLIGHT}}']);
    this._addStyle('.songlist-container', ['background-color: {{BACK_PRIMARY}}']);
    this._addStyle('.nav-section-divider', ['border-bottom: 1px solid {{BACK_HIGHLIGHT}}']);
    this._addStyle('.goog-menu, .now-playing-menu .goog-menuitem, .now-playing-menu .goog-submenu, .now-playing-menu .goog-submenu .goog-submenu-arrow, .goog-menuitem', ['background-color: {{BACK_PRIMARY}}']);
    this._addStyle('.goog-menu .goog-menuitem .goog-menuitem-content, .goog-menuitem-highlight .goog-menuitem-content .goog-submenu-arrow, .goog-menuitem-highlight .goog-menuitem-content', ['color: {{FORE_PRIMARY}}']);
    this._addStyle('.goog-menu .goog-menuitem.selected .goog-menuitem-content', ['color: {{FORE_SECONDARY}}']);
    this._addStyle('.goog-menu .goog-menuitem:hover, .goog-menu .goog-menuseparator', ['background-color: {{BACK_HIGHLIGHT}}']);
    this._addStyle('.material-detail-view .artist-details .bio-wrapper .bio', ['color: {{FORE_PRIMARY}}']);
    this._addStyle('.song-row.hover td a, .song-row.selected-song-row td a', ['color: {{FORE_PRIMARY}}']);
    this._addStyle('paper-action-dialog', ['background: {{BACK_PRIMARY}}', 'color: {{FORE_PRIMARY}}']);
    this._addStyle('.settings-card', ['background-color: {{BACK_PRIMARY}}', 'color: {{FORE_PRIMARY}}']);
    this._addStyle('#queue-overlay', ['background-color: {{BACK_PRIMARY}}']);
    this._addStyle('#queue-overlay::after', ['border-color: transparent transparent {{BACK_PRIMARY}} {{BACK_PRIMARY}}']);
    this._addStyle('.upload-dialog-content', ['background-color: {{BACK_SECONDARY}}']);
    this._addStyle('.upload-dialog-description', ['color: {{FORE_PRIMARY}}']);
    this._addStyle('.material .song-row:hover [data-col="index"] .hover-button[data-id="play"]', ['background-color: {{BACK_HIGHLIGHT}}']);
    this._addStyle('.goog-menuheader', ['color: {{FORE_PRIMARY}}']);
    this._addStyle('.paper-progress-1 #primaryProgress.paper-progress', ['background-color: {{FORE_SECONDARY}}']);
    this._addStyle('.album-view .material-container-details .info .title .explicit', ['background-color: {{FORE_SECONDARY}}']);
    this._addStyle('.paper-input-container-0 .input-content.label-is-highlighted.paper-input-container label, .paper-input-container-0 .input-content.label-is-highlighted.paper-input-container .paper-input-label', ['color: {{FORE_SECONDARY}}']);
    this._addStyle('.paper-input-container-0 .input-content.paper-input-container input, .paper-input-container-0 .input-content.paper-input-container textarea, .paper-input-container-0 .input-content.paper-input-container iron-autogrow-textarea, .paper-input-container-0 .input-content.paper-input-container .paper-input-input, .material-share-options #sharing-option-label', ['color: {{FORE_PRIMARY}}']);
    this._addStyle('.paper-input-container-0 .add-on-content.is-highlighted.paper-input-container *', ['color: {{FORE_SECONDARY}}']);
    this._addStyle('.material-container-details paper-fab, #current-loading-progress', ['background-color: {{FORE_SECONDARY}}']);
    this._addStyle('#player.material .material-player-middle paper-icon-button[data-id="play-pause"]:not([disabled])', ['color: {{FORE_SECONDARY}}']);
    this._addStyle('#loading-overlay.material paper-spinner .circle', ['border-color: {{FORE_SECONDARY}}'], true);
    this._addStyle('a.primary', ['color: {{FORE_SECONDARY}}']);
    this._addStyle('paper-button.material-primary', ['background-color: {{FORE_SECONDARY}}']);
    this._addStyle('paper-checkbox #checkbox.checked', ['border-color: {{FORE_SECONDARY}}', 'background-color: {{FORE_SECONDARY}}']);
    this._addStyle('paper-checkbox #ink', ['color: {{FORE_SECONDARY}}']);
    this._addStyle('paper-checkbox #checkboxLabel', ['color: {{FORE_PRIMARY}}']);
    this._addStyle('paper-toggle-button[checked] .toggle-button', ['background-color: {{FORE_SECONDARY}}']);
    this._addStyle('paper-toggle-button[checked] .toggle-bar', ['background-color: {{FORE_SECONDARY}}']);
    this._addStyle('paper-toggle-button[checked] .toggle-ink', ['color: {{FORE_SECONDARY}}']);
    this._addStyle('.paper-slider-0 #sliderKnobInner.paper-slider, .paper-progress-0 #primaryProgress.paper-progress', ['background-color: {{FORE_SECONDARY}}']);
    this._addStyle('.nav-item-container.selected iron-icon', ['color: {{FORE_SECONDARY}}']);
    this._addStyle('.upload-dialog-title', ['background-color: {{FORE_SECONDARY}}']);
    this._addStyle('.material a, .material .simple-dialog a', ['color: {{FORE_PRIMARY}}']);
    this._addStyle('.material .song-table [data-col="title"], .material .song-table.mini [data-col="song-details"] .song-title', ['color: {{FORE_PRIMARY}}']);
    this._addStyle('.subcategories-list, .material-detail-view .station-container-content-wrapper .material-container-details', ['background-color: {{BACK_PRIMARY}}']);
    this._addStyle('.material-list li a:hover, .material-list li a:focus', ['background-color: {{BACK_HIGHLIGHT}}']);
    this._addStyle('.paper-input-container-0 .focused-line.paper-input-container', ['background-color: {{FORE_SECONDARY}}']);
    this._addStyle('paper-action-dialog paper-button, paper-dialog .buttons paper-button, .share-buttons .share-button .button-label', ['color: {{FORE_PRIMARY}}']);
    this._addStyle('.song-row:hover td, .song-row:hover td > *', ['background: {{BACK_HIGHLIGHT}}']);
    this._addStyle('.material .song-row:hover [data-col="track"] .hover-button[data-id="play"]', ['background-color: {{BACK_HIGHLIGHT}}']);
    this._addStyle('.rating-container li', ['-webkit-filter: invert(1)']);
    this._addStyle('#player.material .material-player-middle paper-icon-button[data-id="repeat"][value="LIST_REPEAT"], #player.material .material-player-middle paper-icon-button[data-id="repeat"][value="SINGLE_REPEAT"], #player.material .material-player-middle paper-icon-button[data-id="shuffle"][value="ALL_SHUFFLE"], #player.material .material-player-middle paper-icon-button[data-id="repeat"][value="LIST_REPEAT"], #player.material .material-player-middle paper-icon-button[data-id="repeat"][value="SINGLE_REPEAT"], #player.material .material-player-middle paper-icon-button[data-id="shuffle"][value="ALL_SHUFFLE"]', ['color: {{FORE_SECONDARY}}']);
    this._addStyle('.cluster .lane-button core-icon, .cluster .lane-button iron-icon, #player.material #material-player-right-wrapper paper-icon-button[data-id="queue"].opened', ['color: {{FORE_SECONDARY}}']);
    this._addStyle('.song-row .explicit, .material-card .explicit', ['background-color: {{FORE_SECONDARY}}']);
    this._addStyle('.material-detail-view .material-container-details .read-more-button', ['color: {{FORE_SECONDARY}}']);
    this._addStyle('paper-dialog', ['background: {{BACK_SECONDARY}}', 'color: {{FORE_PRIMARY}}']);
    this._addStyle('.simple-dialog', ['background-color: {{BACK_PRIMARY}}', 'border-color: {{BACK_SECONDARY}}']);
    this._addStyle('.simple-dialog, .simple-dialog > div', ['background-color: {{BACK_PRIMARY}}', 'color: {{FORE_PRIMARY}}']);
    this._addStyle('.goog-buttonset-default', ['background-color: {{FORE_HIGHLIGHT}}']);
    this._addStyle('button.goog-buttonset-default, button.goog-buttonset-default:hover', ['background-color: {{FORE_SECONDARY}}']);
  }

  _fire(event, details) {
    this.events[event] = this.events[event] || [];
    this.events[event].forEach(function fireEachEvent(fn) {
      fn(details || {});
    });
  }

  _flushStyles() {
    const styleElement = document.createElement('style');
    styleElement.setAttribute('id', 'custom-theme-style');
    styleElement.innerHTML = this.STYLE_STRING;
    document.body.appendChild(styleElement);
  }

  _initLogoWatcher() {
    setInterval(() => {
      const logo = document.querySelectorAll('.menu-logo')[0];
      const normalSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 214 48" id="normalSVGIcon" class="menu-logo"><g fill="#757575"><path d="M12.3 20.5c0-5.4 4.6-9.8 10-9.8 3 0 5.1 1.2 6.7 2.7l-1.9 1.9c-1.2-1.1-2.7-1.9-4.8-1.9-4 0-7.1 3.2-7.1 7.2s3.1 7.2 7.1 7.2c2.6 0 4-1 5-2 .8-.8 1.3-1.9 1.5-3.4h-6.4v-2.7h9c.1.5.1 1.1.1 1.7 0 2-.6 4.5-2.3 6.3-1.7 1.8-3.9 2.8-6.9 2.8-5.5-.1-10-4.5-10-10zM38.8 17.7c-3.5 0-6.4 2.7-6.4 6.3 0 3.6 2.9 6.3 6.4 6.3 3.5 0 6.4-2.7 6.4-6.3-.1-3.6-2.9-6.3-6.4-6.3zm0 10.2c-1.9 0-3.6-1.6-3.6-3.8 0-2.3 1.7-3.8 3.6-3.8 1.9 0 3.6 1.6 3.6 3.8-.1 2.2-1.7 3.8-3.6 3.8zM52.6 17.7c-3.5 0-6.4 2.7-6.4 6.3 0 3.6 2.9 6.3 6.4 6.3 3.5 0 6.4-2.7 6.4-6.3 0-3.6-2.9-6.3-6.4-6.3zm0 10.2c-1.9 0-3.6-1.6-3.6-3.8 0-2.3 1.7-3.8 3.6-3.8s3.6 1.6 3.6 3.8c0 2.2-1.7 3.8-3.6 3.8zM69.7 18.1v1h-.1c-.6-.7-1.8-1.4-3.3-1.4-3.2 0-6.1 2.8-6.1 6.4 0 3.6 2.9 6.3 6.1 6.3 1.5 0 2.7-.7 3.3-1.4h.1v.9c0 2.4-1.3 3.7-3.4 3.7-1.7 0-2.8-1.2-3.2-2.3l-2.4 1c.7 1.7 2.5 3.7 5.6 3.7 3.3 0 6-1.9 6-6.6V18.1h-2.6zm-3.2 9.8c-1.9 0-3.5-1.6-3.5-3.8 0-2.2 1.6-3.9 3.5-3.9s3.4 1.6 3.4 3.9c-.1 2.2-1.5 3.8-3.4 3.8zM74.2 11.4H77V30h-2.8zM84.6 27.9c-1.4 0-2.4-.6-3.1-1.9l8.5-3.5-.3-.7c-.5-1.4-2.1-4-5.4-4-3.3 0-6 2.6-6 6.3 0 3.6 2.7 6.3 6.3 6.3 2.9 0 4.6-1.8 5.3-2.8l-2.2-1.4c-.7 1-1.7 1.7-3.1 1.7zm-.2-7.7c1.1 0 2 .6 2.4 1.3l-5.7 2.4c-.1-2.5 1.9-3.7 3.3-3.7z"/></g><path fill="none" d="M12.1 10.7h78v25.5h-78z"/><path fill="none" d="M12.1 10.7h189.8v25.5H12.1z"/><g fill="#EE6B00"><path d="M143.7 12.8h2.2l6 10.5h.1l6-10.5h2.2V30H158V19.8l.1-2.9h-.1l-5.4 9.4h-1.3l-5.4-9.4h-.1l.1 2.9V30h-2.2V12.8zM171.3 30v-1.6h-.1c-.6 1.1-2.1 2-3.7 2-3 0-4.5-2-4.5-4.9v-7.2h2.2v6.8c0 2.4 1.2 3.3 2.9 3.3 1.9 0 3.1-1.8 3.1-3.6v-6.5h2.2V30h-2.1zM174.9 27l2-.8c.6 1.5 1.8 2.2 3.2 2.2 1.4 0 2.4-.7 2.4-1.7 0-.6-.4-1.2-1.6-1.6l-2.4-.6c-1.1-.3-3.1-1.2-3.1-3.3 0-2.1 2.2-3.5 4.7-3.5 2 0 3.8.9 4.5 2.7l-1.9.8c-.5-1.1-1.5-1.6-2.7-1.6-1.2 0-2.3.6-2.3 1.5 0 .7.6 1.2 1.6 1.4l2.3.6c2.3.6 3.2 2 3.2 3.4 0 2.1-1.9 3.7-4.6 3.7-3 .2-4.6-1.5-5.3-3.2zM186 14.2c0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6-.9-.1-1.6-.8-1.6-1.6zm.4 15.8V18.2h2.2V30h-2.2zM190.5 24.1c0-3.6 2.5-6.3 6-6.3 2.8 0 4.4 1.7 5.2 3.4l-2 .8c-.6-1.4-1.7-2.2-3.3-2.2-1.9 0-3.7 1.7-3.7 4.2s1.8 4.2 3.7 4.2c1.6 0 2.8-.8 3.4-2.2l2 .8c-.7 1.7-2.4 3.4-5.2 3.4-3.6.2-6.1-2.5-6.1-6.1z"/></g><g fill="#757575"><path d="M102.3 11.4h-6.7V30h2.8v-7.1h3.9c3.1 0 6.1-2.2 6.1-5.8s-3.1-5.7-6.1-5.7zm0 9h-4V14h4c2.1 0 3.3 1.7 3.3 3.2 0 1.4-1.2 3.2-3.3 3.2zM112.7 30V11.4h-2.8V30h2.8zM125.2 30v-7.1c0-3.3-2.5-5.2-5.7-5.2-2 0-4.1.9-5 2.9l2.5 1c.5-1 1.5-1.4 2.5-1.4 1.4 0 2.9.9 2.9 2.4v.2c-.5-.3-1.6-.7-2.9-.7-2.7 0-5.4 1.5-5.4 4.2 0 2.5 2.2 4.1 4.6 4.1 1.9 0 2.9-.8 3.5-1.8h.1V30h2.9zm-6-2.1c-.9 0-2.2-.5-2.2-1.6 0-1.4 1.6-2 2.9-2 1.2 0 1.8.3 2.5.6-.1 1.8-1.6 3-3.2 3zM134.9 18.1l-3.2 8.1h-.1l-3.3-8.1h-3l5 11.3-2.8 6.3h2.9l7.6-17.6h-3.1z"/></g><path fill="none" d="M.1 0h213.8v48H.1z"/></svg>';
      const customSVG = normalSVG.replace('#EE6B00', this.FORE_SECONDARY).replace('id="normalSVGIcon"', 'id="customSVGIcon"');
      let parent;
      let tmpSVG;

      if (logo) {
        parent = logo.parentNode;
        if (localStorage.getItem('custom-theme') === 'true') {
          if (logo.nodeName === 'IMG' || logo.id === 'normalSVGIcon' || logo.getAttribute('current-custom') !== this.FORE_SECONDARY) {
            parent.removeChild(logo);
            tmpSVG = (new DOMParser()).parseFromString(customSVG, 'text/xml').firstChild;
            tmpSVG.setAttribute('current-custom', this.FORE_SECONDARY);
            parent.appendChild(tmpSVG);
          }
        } else {
          if (logo.nodeName === 'IMG' || logo.id === 'customSVGIcon') {
            parent.removeChild(logo);
            parent.appendChild((new DOMParser()).parseFromString(normalSVG, 'text/xml').firstChild);
          }
        }
      }
    }, 10);
  }

  _substituteColors(styleString) {
    return styleString.replace(/\{\{BACK_PRIMARY\}\}/g, this.BACK_PRIMARY)
    .replace(/\{\{BACK_SECONDARY\}\}/g, this.BACK_SECONDARY)
    .replace(/\{\{BACK_HIGHLIGHT\}\}/g, this.BACK_HIGHLIGHT)
    .replace(/\{\{FORE_PRIMARY\}\}/g, this.FORE_PRIMARY)
    .replace(/\{\{FORE_SECONDARY\}\}/g, this.FORE_SECONDARY);
  }
};
