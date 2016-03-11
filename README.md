# gmusic-theme.js
[![Build Status](https://travis-ci.org/gmusic-utils/gmusic-theme.js.svg?branch=master)](https://travis-ci.org/gmusic-utils/gmusic-theme.js)
[![GitHub release](https://img.shields.io/github/tag/gmusic-utils/gmusic-theme.js.svg)]()
[![Code Climate](https://img.shields.io/codeclimate/github/gmusic-utils/gmusic-theme.js.svg)]()
[![GitHub license](https://img.shields.io/github/license/gmusic-utils/gmusic-theme.js.svg)]()

Browser-side JS library for theming [Google Music][].

[Google Music]: https://play.google.com/music/

This was built as part of [Google Play Music Desktop Player][], a C# wrapper around [Google Music][].  It was extracted to allow other to make better use of it.

`gmusic-theme.js` is not created by, affiliated with, or supported by Google Inc.

[Google Play Music Desktop Player]: https://github.com/MarshallOfSound/Google-Play-Music-Desktop-Player-UNOFFICIAL-
[Google Music]: https://play.google.com/music/listen

![](https://www.samuel.ninja/img/gpmdp_screen.gif)

## Getting Started
### npm
Install the module with: `npm install gmusic-theme.js`

Once installed, add it to your HTML and access it via `window.GMusicTheme`.

```html
<script src="node_modules/gmusic-theme.js/dist/gmusic-theme.min.js"></script>
<script>
  window.theme = new window.GMusicTheme(); // Our Google Music Theme API
</script>
```

### Vanilla
If you are not using a package manager, download the latest script at:

https://raw.githubusercontent.com/gmusic-utils/gmusic-theme.js/master/dist/gmusic-theme.min.js

Then, add it to your HTML and access it via `window.GMusicTheme`.

```html
<script src="gmusic-theme.min.js"></script>
<script>
  window.theme = new window.GMusicTheme(window); // Our Google Music API
</script>
```

## Documentation
`gmusic-theme.js` exposes a constructor, `window.GMusicTheme`

### `new GMusicTheme(config)`
Constructor for a new Google Music Theme API.

- config - `Object` -  An object containing `backPrimary`, `backSecondary`,
`backHighlight`, `forePrimary`, `foreSecondary` and `enabled` attributes any attribute not
included will not be changed from the defaults.  `enabled` is set to false by default.

### States

#### `enable()`
Enables the current custom theme

#### `disable()`
Disables the current custom theme

### Customizing the Colors

#### `updateTheme(colorObject)`
Updates the colors used in the custom theme and redraws the theme.

- colorObject - `Object` -  A colors object containing `backPrimary`, `backSecondary`,
`backHighlight`, `forePrimary` and `foreSecondary` attributes any attribute not
included will not be changed.

## Defaults
All default colors for the custom theme are copied below

```js
BACK_PRIMARY   = '#222326';
BACK_SECONDARY = '#121314';
BACK_HIGHLIGHT = '#615F59';
FORE_PRIMARY   = '#FFFFFF';
FORE_SECONDARY = '#1ED760';
```

|      BACK_PRIMARY     |      BACK_SECONDARY     |      BACK_HIGHLIGHT     |      FORE_PRIMARY     |      FORE_SECONDARY     |
|-----------------------|-------------------------|-------------------------|-----------------------|-------------------------|
| ![BACK_PRIMARY_IMG][] | ![BACK_SECONDARY_IMG][] | ![BACK_HIGHLIGHT_IMG][] | ![FORE_PRIMARY_IMG][] | ![FORE_SECONDARY_IMG][] |

[BACK_PRIMARY_IMG]: https://img.shields.io/badge/%23222326-%20%20%20-222326.svg
[BACK_SECONDARY_IMG]: https://img.shields.io/badge/%23121314-%20%20%20-121314.svg
[BACK_HIGHLIGHT_IMG]: https://img.shields.io/badge/%23615F59-%20%20%20-615F59.svg
[FORE_PRIMARY_IMG]: https://img.shields.io/badge/%23FFFFFF-%20%20%20-FFFFFF.svg
[FORE_SECONDARY_IMG]: https://img.shields.io/badge/%231ED760-%20%20%20-1ED760.svg

## Color Format
When changing colors you can use **ANY** CSS standard color syntax.  `#`, `rgb()`, `rgba()` Etc.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via `npm run lint` and test via `npm test`.

### Testing
Currently there is no testing framework.  How do we test a theming library????
