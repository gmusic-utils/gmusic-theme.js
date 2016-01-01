# gmusic-theme.js

Browser-side JS library for theming [Google Music][].

[Google Music]: https://play.google.com/music/

This was built as part of [Google Play Music Desktop Player][], a C# wrapper around [Google Music][].  It was extracted to allow other to make better use of it.

`gmusic-theme.js` is not created by, affiliated with, or supported by Google Inc.

[Google Play Music Desktop Player]: https://github.com/MarshallOfSound/Google-Play-Music-Desktop-Player-UNOFFICIAL-
[Google Music]: https://play.google.com/music/listen

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

### `new GMusicTheme()`
Constructor for a new Google Music Theme API.

### States

#### `enable()`
Enables the current custom theme

#### `disable()`
Disables the current custom theme

### Customizing the Colors

#### `updateBackPrimary(color)`
Updates the primary background color and redraws the theme

- color `String` - A string representing a hexadecimal color.  Must have a **#** at the start

#### `updateBackSecondary(color)`
Updates the secondary background color and redraws the theme

- color `String` - A string representing a hexadecimal color.  Must have a **#** at the start

#### `updateBackHighlight(color)`
Updates the highlight background color and redraws the theme

- color `String` - A string representing a hexadecimal color.  Must have a **#** at the start

#### `updateForePrimary(color)`
Updates the primary foreground color and redraws the theme

- color `String` - A string representing a hexadecimal color.  Must have a **#** at the start

#### `updateForeSecondary(color)`
Updates the secondary foreground color and redraws the theme  
**NOTE:** This is the color that updates the default orange / green highlights in GPM

- color `String` - A string representing a hexadecimal color.  Must have a **#** at the start

## Defaults
All default colors for the custom theme are copied below

```js
BACK_PRIMARY   = '#222326';
BACK_SECONDARY = '#121314';
BACK_HIGHLIGHT = '#615F59';
FORE_PRIMARY   = '#FFFFFF';
FORE_SECONDARY = '#1ED760';
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint via `npm run lint` and test via `npm test`.

### Testing
Currently there is no testing framework.  How do we test a theming library????
